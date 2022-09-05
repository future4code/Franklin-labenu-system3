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
const arrayTeachers: Teacher[] = []

export default class CreateTeacher {
    post(request: Request, response: Response) {

    const requestBody = request.body
    try{
    
        if(!requestBody.teacherId || !requestBody.teacherName || !requestBody.teacherEmail || !requestBody.teacherBirth || !requestBody.classIdTeacher){
          response.status(400).send("Todos os campos devem ser peenchidos")
        }
        const newTeacher: Teacher  = {
          teacherId: requestBody.teacherId,
          teacherName: requestBody.teacherName,
          teacherEmail: requestBody.teacherEmail,
          teacherBirth: requestBody.teacherBirth,
          classIdTeacher: requestBody.classIdTeacher
        }
          arrayTeachers.push (newTeacher) // Esta linha será modificada ao conectar no banco de dados
          response.status(200).send('Professor criado com sucesso')
        } catch (error) {
            response.status(400).send("Algo deu errado. Tente novamente") 
        }
  }
}

// O que usei para testar o endpoint no body
// {
//   "teacherId":1,
//   "teacherName": "Maria Oliveira",
//   "teacherEmail": "maria@gmail.com",
//   "teacherBirth": "20/09/1984",
//   "classIdTeacher": 1
// }