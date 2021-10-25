import { Controller, Get, Param } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller("teachers")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers() {
    return this.teacherService.getTeachers();
  }
  @Get("/:teacherId")
  getTeacherById(@Param("teacherId") teacherId: string) {
    return `get teacher at id ${teacherId}`;
  }
}
