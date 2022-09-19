import { knex } from '../config/connection';
import Student from '../model/Student';
import { dateFormat } from '../utils/dateFormat';
import {v4 as uuid} from 'uuid';

export default class StudentService {
  static async save(student: Student) {
    return await knex('Students')
      .insert({
        id: uuid(),
        name: student.name,
        email: student.email,
        birth_date: dateFormat(student.birth_date),
        class_id: student.class_id,
      })
      .then(() => {
        return { code: 201, result: student };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  static async update(id: string, student: Student) {
    return await knex('Students')
      .where('id', id)
      .update({
        name: student.name,
        email: student.email,
        birth_date: dateFormat(student.birth_date),
        class_id: student.class_id,
      })
      .then(() => {
        return { code: 200, result: student };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }

  static async getByName(name: string) {
    return await knex('Students')
      .where('name', name)
      .then((result: Array<Student>) => {
        if (!result.length) throw new Error('Usuário não existe');
        return { code: 200, result: result };
      })
      .catch((error) => {
        return { code: 404, result: error.message };
      });
  }

  static async findAll() {
    return await knex('Students')
      .then((result) => {
        return { code: 200, result: result };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }
}
