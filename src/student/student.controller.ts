import { StudentService } from "./student.service";
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from "@nestjs/common";
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto
} from "./student.dto";

@Controller("students")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }
  @Get("/:studentId")
  // name inside @Param("name") should match the exact param name in the endpoint being hit
  getStudentById(
    @Param("studentId", new ParseUUIDPipe()) sid: string
  ): FindStudentResponseDto {
    console.log(`got student by id ${sid}`);
    return this.studentService.getStudentById(sid);
  }
  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log(body);
    console.log(`creating student ${JSON.stringify(body)}`);
    return this.studentService.createStudent(body);
  }
  @Put("/:studentId")
  updateStudentById(
    @Param("/:studentId", new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto
  ): StudentResponseDto {
    console.log(
      `updating student at id ${studentId} with body ${JSON.stringify(body)} `
    );
    return this.studentService.updateStudent(studentId, body);
  }
}
