import { Injectable } from "@nestjs/common";
import { students } from "src/db";
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto
} from "./student.dto";
import { v4 } from "uuid";

@Injectable()
export class StudentService {
  private readonly students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(id: string): FindStudentResponseDto {
    const student = this.students.find((student) => student.id == id);
    return student;
  }

  createStudent(body: CreateStudentDto): StudentResponseDto {
    const student = {
      id: v4(),
      ...body
    };
    students.push(student);
    return student;
  }

  updateStudent(id: string, body: UpdateStudentDto): StudentResponseDto {
    let student = this.students.find((student) => (student.id = id));
    this.students.filter((student) => student.id !== id);
    student = {
      ...student,
      ...body
    };
    this.students.push(student);
    return student;
  }
}
