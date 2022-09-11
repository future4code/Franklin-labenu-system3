import Class from '../model/Class';
import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';

export default class ClassService {
  static async findAll() {
    return await knex('Classes')
      .then((result) => ({ code: 200, result: result }))
      .catch((error) => ({ code: 400, result: error.message }));
  }

  static async save(classes: Class) {
    return await knex('Classes')
      .insert({
        id: uuid(),
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

  static async getActiveClasses() {
    return await knex('Classes')
      .where('module', '>', 0)
      .then((result: Array<Class>) => {
        if (!result.length) throw new Error('Não há turmas ativas');
        return { code: 200, result: result };
      })
      .catch((error) => ({ code: 404, result: error.message }));
  }

  static async update(id: string, classes: Class) {
    return await knex('Classes')
      .where('id', id)
      .update({
        name: classes.name,
        module: classes.module,
      })
      .then(() => ({ code: 200, result: classes }))
      .catch((error) => ({ code: 400, result: error.message }));
  }
}
