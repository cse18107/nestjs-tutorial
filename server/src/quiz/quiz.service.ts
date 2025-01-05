import { Injectable } from '@nestjs/common';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/CreateQuiz.dot';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(private quizRepository: QuizRepository) {}

  getAllQuiz() {
    return [1, 2, 3, 4, '09'];
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id);
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
