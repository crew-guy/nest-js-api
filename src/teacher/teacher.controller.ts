import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller("teachers")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers() {
    return this.teacherService.getTeachers();
  }
  @Get("/:teacherId")
  getTeacherById(@Param("teacherId", new ParseUUIDPipe()) teacherId: string) {
    return this.teacherService.getTeacherById(teacherId);
  }
}
