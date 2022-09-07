import { Router } from 'express';
import StudentController from '../controller/StudentController';
import TeacherController from '../controller/TeacherController';
import ClassController from '../controller/ClassController';

const router = Router();

const studentController = new StudentController();
router.post('/student', studentController.save);
router.put('/student/:id', studentController.update);
router.get('/student', studentController.findAll);
router.get('/student/:name', studentController.getByName);

const teacherController = new TeacherController();
router.post('/create-teacher', teacherController.CreateTeacher);
router.get('/teacher', teacherController.GetTeacher);

const classController = new ClassController();
router.get('/class', classController.findAll);
router.get('/class/:id', classController.findOne);
router.post('/class', classController.create);
router.put('/class/:id', classController.update);

export default router;

