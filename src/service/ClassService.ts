import Class from '../model/Class';
import { knex } from '../config/connection';
import { dateFormat } from '../utils/dateFormat';

export default class ClassService {
  static async findAll() {
    return await knex('Classes')
      .then((result) => ({ code: 200, result: result }))
      .catch((error) => ({ code: 400, result: error.message }));
  }

  static async save(classes: Class) {
    return await knex('Classes')
      .insert({
        id: classes.id,
        name: classes.name,
        module: classes.module,
      })
      .then(() => ({ code: 201, result: classes }))
      .catch((error) => ({ code: 400, result: error?.sqlMessage }));
  }

  static async getById(id: string) {
    return await knex('Classes')
      .where('id', id)
      .then((result: Array<Class>) => ({ code: 200, result: result }))
      .catch((error) => ({ code: 404, result: error.message }));
  }

  static async update(id: string, classes: Class) {
    return await knex('Classes')
      .where('id', id)
      .update({
        id,
        name: classes.name,
        module: classes.module,
      })
      .then(() => ({ code: 200, result: classes }))
      .catch((error) => ({ code: 400, result: error.message }));
  }
}
