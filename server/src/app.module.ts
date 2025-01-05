import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [QuizModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
