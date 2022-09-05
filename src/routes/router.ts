import { Router } from 'express';
import StudentController from '../controller/StudentController';
import CreateTeacher from '../controller/CreateTeacher';
import ClassController from '../controller/ClassController';
import GetTeacher from '../controller/GetTeacher';

const router = Router();

const studentController = new StudentController();
router.get('/student', studentController.get);

const createTeacher = new CreateTeacher();
router.post('/create-teacher', createTeacher.post);

const getTeacher = new GetTeacher();
router.get('/teacher', getTeacher.get);

const classController = new ClassController();
router.get('/class', classController.get);

export default router;
