import { Request, Response } from 'express';
import service from '../service/TeacherService';

export default class TeacherController {
  async CreateTeacher(request: Request, response: Response) {
    const teacher = request.body;
    const { code, result } = await service.CreateTeacher(teacher);

    return response.status(code).json(result);
  }

  async EditTeacher(request: Request, response: Response) {
    const id = request.params.id;
    const teacher = request.body;
    const { code, result } = await service.EditTeacher(id, teacher);

    return response.status(code).json(result);
  }

  async GetTeacherByName(request: Request, response: Response) {
    const name = request.params.name;
    const { code, result } = await service.GetTeacherByName(name);

    return response.status(code).json(result);
  }

  async GetTeacher(request: Request, response: Response) {
    const { code, result } = await service.GetTeacher();

    return response.status(code).json(result);
  }
}