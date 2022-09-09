import { Request, Response } from 'express';
import Class from '../service/ClassService';

export default class ClassController {
  async findAll(request: Request, response: Response) {
    const { code, result } = await Class.findAll();

    return response.status(code).json(result);
  }

  async getById(request: Request, response: Response) {
    const id = request.params.id;
    const { code, result } = await Class.getById(id);

    return response.status(code).json(result);
  }

  async save(request: Request, response: Response) {
    const classes = request.body;
    const { code, result } = await Class.save(classes);

    return response.status(code).json(result);
  }

  async update(request: Request, response: Response) {
    const id = request.params.id;
    const classes = request.body;
    const { code, result } = await Class.update(id, classes);

    return response.status(code).json(result);
  };
};
