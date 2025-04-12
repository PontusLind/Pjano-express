const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

router.get('/api/lessons', lessonController.getLessons);
router.get('/api/lessons/:id', lessonController.getLessonById);
router.post('/api/lessons', lessonController.createLesson);
router.put('/api/lessons/:id', lessonController.updateLesson);
router.delete('/api/lessons/:id', lessonController.deleteLesson);

module.exports = router;
