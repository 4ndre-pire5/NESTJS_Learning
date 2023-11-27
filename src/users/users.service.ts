import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto/user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async getAllUsers() {
        return this.prisma.user.findMany({
            include: {
                posts: true,
            }
        });
    }

    async getUserById(id: number) {
        const user = await this.prisma.user.findUnique({
            where:{
                id,
            },
            include:{
                posts: true,
            }
        });
        if(!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async createUser(dataUser: CreateUserDto) {
        return this.prisma.user.create({
            data: dataUser,
        });
    }


    async updateUser(id: number, dataUser: UpdateUserDto) {
        const { username, email } = dataUser;
        return this.prisma.user.update({
            where: { id },
            data: { username, email },
        });
    }

    async deleteUser(id: number) {
        return this.prisma.user.delete({
            where: {
                id,
            }
        });
    }

}
