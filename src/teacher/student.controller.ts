import { Controller, Get } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsTeacher() {
    return 'teacher teaching all these students';
  }
  @Get('/:student')
  updateStudentTeacher() {
    return 'student at id under teacher at id';
  }
}
