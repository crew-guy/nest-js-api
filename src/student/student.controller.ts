import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `got student by id ${studentId}`;
  }
  @Post()
  createStudent() {
    return 'creating student';
  }
  @Put('/:studentId')
  updateStudentById() {
    return 'updating student by id';
  }
}
