import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Question } from './question.entity';

@Injectable()
export class QuestionRepository extends Repository<Question> {}
