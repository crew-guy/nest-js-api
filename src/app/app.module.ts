import { TeacherModule } from "./../teacher/teacher.module";
import { Module } from "@nestjs/common";
import { StudentModule } from "src/student/student.module";

@Module({
  imports: [StudentModule, TeacherModule]
})
export class AppModule {}
