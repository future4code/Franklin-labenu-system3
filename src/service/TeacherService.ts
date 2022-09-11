import { knex } from '../config/connection';
import Teacher from '../model/Teacher';
import {v4 as uuid} from 'uuid';
import { dateFormat } from '../utils/dateFormat';

export default class TeacherService {
  static async CreateTeacher(teacher: Teacher) {
    return await knex('Teachers')
      .insert({
        id: uuid(),
        name: teacher.name,
        email: teacher.email,
        birth_date: dateFormat(teacher.birth_date),
        class_id: teacher.class_id,
      })
      .then(() => {
        return { code: 200, result: teacher };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  static async EditTeacher(id: string, teacher: Teacher) {
    return await knex('Teachers')
      .where('id', id)
      .update({
        name: teacher.name,
        email: teacher.email,
        birth_date: dateFormat(teacher.birth_date),
        class_id: teacher.class_id,
      })
      .then(() => {
        return { code: 200, result: teacher };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }

  static async GetTeacherByName(name: string) {
    return await knex('Teachers')
      .where('name', name)
      .then((result: Array<Teacher>) => {
        if (!result.length) throw new Error('Usuário não existe');
        return { code: 200, result: result };
      })
      .catch((error) => {
        return { code: 404, result: error.message };
      });
  }

  static async GetTeacher() {
    return await knex('Teachers')
      .then((result) => {
        return { code: 200, result: result };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }
}
