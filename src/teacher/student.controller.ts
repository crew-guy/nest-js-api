import { Body, Put, Controller, Get, Param } from "@nestjs/common";
import { students } from "src/db";
import { FindStudentResponseDto } from "src/student/student.dto";
import { StudentService } from "src/student/student.service";

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudentsTeacher(
    @Param("teacherId") teacherId: string
  ): FindStudentResponseDto[] {
    console.log(`teacher ${teacherId} teaching all these students`);
    return this.studentService.getStudentsOfTeacher(teacherId);
  }
  @Put("/:studentId")
  updateStudentTeacher(
    @Param("teacherId") teacherId: string,
    @Param("studentId") studentId: string,
    @Body() body
  ) {
    return this.studentService.changeStudentTeacher(teacherId, studentId, body);
  }
}
