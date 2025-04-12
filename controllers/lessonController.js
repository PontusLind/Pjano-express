const lessonService = require('../services/lessonService');

exports.createLesson = async (req, res) => {
    try {
        const lessonId = await lessonService.createLesson(req.body);
        res.status(201).json({
            id: lessonId
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

exports.getLessons = async (req, res) => {
    try {
        const lessons = await lessonService.getLessons();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

exports.getLessonById = async (req, res) => {
    try {
        const lesson = await lessonService.getLessonById(req.params.id);
        if (lesson) {
            res.status(200).json(lesson);
        } else {
            res.status(404).json({
                message: 'Lesson not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

exports.updateLesson = async (req, res) => {
    try {
        const affectedRows = await lessonService.updateLesson(req.params.id, req.body);
        if (affectedRows > 0) {
            res.status(200).json({
                message: 'Lesson updated successfully'
            });
        } else {
            res.status(404).json({
                message: 'Lesson not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

exports.deleteLesson = async (req, res) => {
    try {
        const affectedRows = await lessonService.deleteLesson(req.params.id);
        if (affectedRows > 0) {
            res.status(200).json({
                message: 'Lesson deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Lesson not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}
