import { Injectable } from "@nestjs/common";
import { teachers } from "src/db";
import { FindTeacherResponseDto } from "./teacher.dto";

@Injectable()
export class TeacherService {
  private readonly teachers = teachers;
  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(id: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === id);
  }
}
