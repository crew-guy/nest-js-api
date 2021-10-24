import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }
  @Get('/:studentId')
  getStudentById() {
    return 'got student by id';
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
