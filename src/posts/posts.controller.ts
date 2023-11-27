import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto, UpdatePostDto } from "./dto/posts.dto/posts.dto";

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostsService){}

    @Get()
    async getAllPosts(){
        return this.postService.getAllPosts();
    }
    
    @Get(':id')
    async getPostById(@Param('id') id: string) {
        return this.postService.getPostById(+id);
    }

    @Post()
    async createPost(@Body() postData: CreatePostDto) {
        return this.postService.createPost(postData);
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() postData: UpdatePostDto) {
        return this.postService.updatePost(+id, postData);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        return this.postService.deletePost(+id);
    }

}