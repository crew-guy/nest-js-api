import { Body, Controller, Get, Param } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {
  @Get()
  getStudentsTeacher(@Param("teacherId") teacherId: string) {
    return `teacher ${teacherId} teaching all these students`;
  }
  @Get("/:student")
  updateStudentTeacher(
    @Param("teacherId") teacherId: string,
    @Param("studentId") studentId: string,
    @Body() body
  ) {
    return `update student ${studentId} of teacher ${teacherId} with body ${JSON.stringify(
      body
    )}`;
  }
}
