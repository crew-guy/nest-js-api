import { Injectable } from "@nestjs/common";
import { students } from "src/db";
import { FindStudentResponseDto } from "./student.dto";

@Injectable()
export class StudentService {
  private readonly students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }
}
