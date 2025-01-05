import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuizService } from 'src/quiz/services/quiz/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Post('/')
  @HttpCode(200)
  createQuiz(@Body() quizData) {
    return { data: quizData };
  }
}
