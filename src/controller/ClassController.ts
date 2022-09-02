import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class ClassController {
  async get(request: Request, response: Response) {
 
    return response.status(200).json('gang test');
  }
}