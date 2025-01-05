import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/modules/quiz/quiz.module';
import { QuizService } from './quiz/services/quiz/quiz.service';

@Module({
  controllers: [AppController],
  providers: [AppService, QuizService],
  imports: [QuizModule],
})
export class AppModule {}
