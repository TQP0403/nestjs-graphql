import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';
import { Student } from '../student/student.entity';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: Student[];
}
