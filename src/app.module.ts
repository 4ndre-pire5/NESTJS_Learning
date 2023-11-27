import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { UserController } from './users/users.controller';
import { PostController } from './posts/posts.controller';

@Module({
  imports: [UsersModule, PostsModule],
  providers: [PrismaService]
})
export class AppModule {}
