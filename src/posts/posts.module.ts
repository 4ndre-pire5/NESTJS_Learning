import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostController],
  providers: [PostsService, PrismaService]
})
export class PostsModule {}
