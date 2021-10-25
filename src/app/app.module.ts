import { TeacherController } from "./../teacher/teacher.controller";
import { Module } from "@nestjs/common";
import { StudentController } from "src/student/student.controller";
import { StudentTeacherController } from "src/teacher/student.controller";
import { StudentService } from "src/student/student.service";
import { TeacherService } from "src/teacher/teacher.service";

@Module({
  imports: [],
  controllers: [StudentController, StudentTeacherController, TeacherController],
  providers: [StudentService, TeacherService]
})
export class AppModule {}
