import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from "./student.dto";

@Controller("students")
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return [
      {
        name: "",
        id: "",
        teacher: "",
      },
    ];
  }
  @Get("/:studentId")
  // name inside @Param("name") should match the exact param name in the endpoint being hit
  getStudentById(@Param("studentId") sid: string): FindStudentResponseDto {
    console.log(`got student by id ${sid}`);
    return {
      name: "",
      id: "",
      teacher: "",
    };
  }
  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log(body);
    console.log(`creating student ${JSON.stringify(body)}`);
    return {
      name: "",
      id: "",
      teacher: "",
    };
  }
  @Put("/:studentId")
  updateStudentById(
    @Param("/:studentId") studentId: string,
    @Body() body: UpdateStudentDto
  ): StudentResponseDto {
    console.log(
      `updating student at id ${studentId} with body ${JSON.stringify(body)} `
    );
    return {
      name: "",
      id: "",
      teacher: "",
    };
  }
}
