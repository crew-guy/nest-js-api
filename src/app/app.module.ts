import { TeacherController } from "./../teacher/teacher.controller";
import { Module } from "@nestjs/common";
import { StudentController } from "src/student/student.controller";
import { StudentTeacherController } from "src/teacher/student.controller";

@Module({
  imports: [],
  controllers: [StudentController, StudentTeacherController, TeacherController],
  providers: []
})
export class AppModule {}
