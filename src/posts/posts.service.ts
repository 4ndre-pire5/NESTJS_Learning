import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto/posts.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    async getAllPosts() {
        return this.prisma.post.findMany();
    }

    async getPostById(id: number) {
        const post = await this.prisma.post.findUnique({
            where: {
                id,
            }
        });
        if (!post) {
            throw new NotFoundException("Post not found.");
        }
        return post;
    }

    async createPost(postData: CreatePostDto) {
        const { title, content, userId } = postData;
        return this.prisma.post.create({
            data: {
                title,
                content,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }

    async updatePost(id: number, postData: UpdatePostDto) {
        const { title, content } = postData;
        return this.prisma.post.update({
            where: {
                id,
            },
            data: {
                title,
                content,
            }
        });
    }

    async deletePost(id: number) {
        return this.prisma.post.delete({
            where: {
                id,
            }
        });
    }

}
