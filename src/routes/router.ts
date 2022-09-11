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
router.post('/teacher', teacherController.CreateTeacher);
router.put('/teacher/:id', teacherController.EditTeacher);
router.get('/teacher', teacherController.GetTeacher);
router.get('/teacher/:name', teacherController.GetTeacherByName);

const classController = new ClassController();
router.post('/class', classController.save);
router.put('/class/:id', classController.update);
router.get('/class/:id', classController.getById);
router.get('/class/status/active', classController.getActiveClasses);

router.get('/class', classController.findAll);

export default router;
