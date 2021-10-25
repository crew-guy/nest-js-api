import { StudentController } from "src/student/student.controller";
import { Module } from "@nestjs/common";
import { StudentService } from "./student.service";

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService]
})
export class StudentModule {}
