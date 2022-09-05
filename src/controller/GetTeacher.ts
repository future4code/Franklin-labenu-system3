import { Request, Response } from 'express';
import { knex } from '../config/connection';

export type Teacher ={
  teacherId:number,
  teacherName: string,
  teacherEmail: string,
  teacherBirth: string,
  classIdTeacher: number
}

// Este Array será retirado ao conectar no banco de dados
const arrayTeachersGet: Teacher[] = [
    {
        teacherId: 2,
        teacherName: "Ricardo Oliveira",
        teacherEmail: "ricardo@gmail.com",
        teacherBirth: "20/09/1984",
        classIdTeacher: 2
    }
]

export default class GetTeacher {
    get(request: Request, response: Response) {

    try{
          response.status(200).send(arrayTeachersGet)
        } catch (error) {
            response.status(400).send("Algo deu errado. Tente novamente") 
        }
  }
}
