import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All students";
  }
  @Get("/:studentId")
  // name inside @Param("name") should match the exact param name in the endpoint being hit
  getStudentById(@Param("studentId") sid: string) {
    return `got student by id ${sid}`;
  }
  @Post()
  createStudent(@Body() body) {
    console.log(body);
    return `creating student ${JSON.stringify(body)}`;
  }
  @Put("/:studentId")
  updateStudentById(@Param("/:studentId") studentId: string, @Body() body) {
    return `updating student at id ${studentId} with body ${JSON.stringify(
      body
    )} `;
  }
}
