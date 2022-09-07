import { Request, Response } from 'express';
import service from '../service/StudentService';

export default class StudentController {
  async save(request: Request, response: Response) {
    const student = request.body;
    const { code, result } = await service.save(student);

    return response.status(code).json(result);
  }

  async update(request: Request, response: Response) {
    const id = request.params.id;
    const student = request.body;
    const { code, result } = await service.update(id, student);

    return response.status(code).json(result);
  }

  async getByName(request: Request, response: Response) {
    const name = request.params.name;
    const { code, result } = await service.getByName(name);

    return response.status(code).json(result);
  }

  async findAll(request: Request, response: Response) {
    const { code, result } = await service.findAll();

    return response.status(code).json(result);
  }
}
