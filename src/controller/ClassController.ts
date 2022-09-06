import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class ClassController {
  async findAll(request: Request, response: Response) {

    const { rows } = await knex.raw("select * from turma");

    for (let i = 0; i < rows.length; i++) {
      const { rows: student } = await knex.raw(
        "select id, nome from estudante where id in (select estudante_id from estudante_turma where turma_id = ?)", [rows[i].id]
      );

      rows[i].students = student;

      const { rows: teacher } = await knex.raw(
        "select id, nome from docente where id in (select docente_id from docente_turma where turma_id = ?)", [rows[i].id]
      );

      rows[i].teachers = teacher;
    }

    return response.status(200).json(rows);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;
    const { rows } = await knex.raw("select * from turma where id = ?", [id]);

    if (rows.length == 0) {
      return response.status(400).send("Erro")
    }

    const { rows: estudante } = await knex.raw(
      "select id, nome from estudante where id in (select estudante_id from estudante_turma where turma_id = ?)", [rows[0].id]
    );

    rows[0].estudantes = estudante;

    const { rows: docente } = await knex.raw(
      "select id, nome from docente where id in (select docente_id from docente_turma where turma_id = ?)", [rows[0].id]
    );

    rows[0].docentes = docente;

    return response.status(200).json(rows[0]);
  }

  async create(request: Request, response: Response) {

    const { id, nome, inicio, fim, modulo } = request.body;
    const { rows } = await knex.raw("insert into turma (id, nome, inicio, fim, modulo) values (?, ?, ?, ?, ?)", [id, nome, inicio, fim, modulo]);

    return response.sendStatus(200);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, inicio, fim, modulo } = request.body;
    const { rowCount } = await knex.raw("update turma set nome =?, inicio=?, fim=?, modulo =? where id = ?", [nome, inicio, fim, modulo, id]);

    if (rowCount == 0) {
      return response.status(400).send("Erro")
    }

    return response.status(200).send('Sucesso')
  }
};