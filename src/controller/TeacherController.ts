import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class TeacherController {
  async get(request: Request, response: Response) {
 
    return response.status(200).json('Este é o endpoint que pega os professores');
  }
}
