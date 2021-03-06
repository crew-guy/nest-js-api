import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("this middleware was called");
    const studentId = req.params.studentId;
    const student = students.some((student) => student.id === studentId);
    if (!student) {
      throw new HttpException("student not found", 400);
    }
    next();
  }
}
