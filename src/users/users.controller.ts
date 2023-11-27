import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto/user.dto";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UsersService){}

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id:string){
        return this.userService.getUserById(+id);
    }

    @Post()
    async createUser(@Body() data: CreateUserDto) {
        return this.userService.createUser(data);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() dataUser: UpdateUserDto) {
        return this.userService.updateUser(+id, dataUser);
    }

    @Delete('id')
    async deleteUser(@Param('id') id:string) {
        return this.userService.deleteUser(+id);
    }

}