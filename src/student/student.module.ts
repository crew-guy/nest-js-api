import { StudentController } from "src/student/student.controller";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { StudentService } from "./student.service";
import { ValidStudentMiddleware } from "src/common/middleware/validStudent";

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService]
})
export class StudentModule implements NestModule{
    configure(consumer:MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware);
    }
}
