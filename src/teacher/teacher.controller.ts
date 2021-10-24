import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'all teachers';
  }
  @Get('/:teacherId')
  getTeacherById() {
    return 'teacher by id';
  }
}
