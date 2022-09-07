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

export default class TeacherController {
    CreateTeacher(request: Request, response: Response) {

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

    GetTeacher(request: Request, response: Response) {

    try{
          response.status(200).send(arrayTeachersGet)
    } catch (error) {
            response.status(400).send("Algo deu errado. Tente novamente") 
        }
    }

}