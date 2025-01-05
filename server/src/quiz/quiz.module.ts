import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from 'src/quiz/quiz.controller';
import { QuizService } from 'src/quiz/quiz.service';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './quiz.entity';
import { DataSource } from 'typeorm';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [
    TypeOrmModule.forFeature([Quiz]),
    TypeOrmModule.forFeature([Question]),
  ],
  providers: [
    QuizService,
    QuestionService,
    {
      provide: QuizRepository,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Quiz).extend(QuizRepository.prototype),
      inject: [DataSource],
    },
    {
      provide: QuestionRepository,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Question).extend(QuestionRepository.prototype),
      inject: [DataSource],
    },
  ],
  exports: [QuizRepository, QuestionRepository],
})
export class QuizModule {}
