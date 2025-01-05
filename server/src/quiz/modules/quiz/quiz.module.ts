import { Module } from '@nestjs/common';
import { QuizController } from 'src/quiz/controllers/quiz/quiz.controller';
import { QuizService } from 'src/quiz/services/quiz/quiz.service';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
