import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/quiz/question.entity';
import { Quiz } from 'src/quiz/quiz.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Saikat@988',
  database: 'quiz',
  entities: [Quiz, Question],
  synchronize: true,
  logging: true,
};
