const Router = require('koa-router');
const router = new Router();

const lessonController = require('../controllers/lesson');
const teacherController = require('../controllers/teacher');
const pupilController = require('../controllers/pupil');
const journalController = require('../controllers/journal');

// lessons
router.post('/lessons', lessonController.create);
router.get('/lessons', lessonController.getAll);
router.get('/lessons/:id', lessonController.getById);
router.put('/lessons', lessonController.update);
router.delete('/lessons/:id', lessonController.deleteById);

// teachers
router.post('/teachers', teacherController.create);
router.get('/teachers', teacherController.getAll);
router.get('/teachers/:id', teacherController.getById);
router.put('/teachers', teacherController.update);
router.delete('/teachers/:id', teacherController.deleteById);

// pupils
router.post('/pupils', pupilController.create);
router.get('/pupils', pupilController.getAll);
router.get('/pupils/:id', pupilController.getById);
router.put('/pupils', pupilController.update);
router.delete('/pupils/:id', pupilController.deleteById);

// journals
router.post('/journals', journalController.create);
router.get('/journals', journalController.getAll);
router.get('/journals/lesson/:lesson_id', journalController.getByLesson);
router.get('/journals/grade/:grade', journalController.getByGrade);
router.get('/journals/pupil/:pupil_id', journalController.getByPupil);
router.get('/journals/:id', journalController.getById);
router.put('/journals', journalController.update);
router.delete('/journals/:id', journalController.deleteById);

module.exports = router;