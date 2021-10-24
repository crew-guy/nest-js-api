import { Controller, Get, Param } from "@nestjs/common";

@Controller("teachers")
export class TeacherController {
  @Get()
  getTeachers() {
    return "all teachers";
  }
  @Get("/:teacherId")
  getTeacherById(@Param("teacherId") teacherId: string) {
    return `get teacher at id ${teacherId}`;
  }
}
