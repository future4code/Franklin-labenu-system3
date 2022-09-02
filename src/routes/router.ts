import { Router } from 'express';
import StudentController from '../controller/StudentController';
import TeacherController from '../controller/TeacherController';
import ClassController from '../controller/ClassController';

const router = Router();

const studentController = new StudentController();
router.get('/student', studentController.get);

const teacherController = new TeacherController();
router.get('/teacher', teacherController.get);

const classController = new ClassController();
router.get('/class', classController.get);


export default router;
