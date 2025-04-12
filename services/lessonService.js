const connection = require('./../connection');

function getLessons() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM lessons';
        connection.query(sql, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}

function getLessonById(id) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM lessons WHERE id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result[0]);
        });
    });
}

function createLesson(lesson) {
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO lessons (lesson_name, information, chords, image, infoImage)
            VALUES (?, ?, ?, ?, ?)
        `;
        connection.query(
            sql,
            [
                lesson.lesson_name,
                JSON.stringify(lesson.information),
                JSON.stringify(lesson.chords),
                lesson.image,
                JSON.stringify(lesson.infoImage)
            ],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            }
        );
    });
}

function updateLesson(id, lesson) {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE lessons
            SET lesson_name = ?, information = ?, chords = ?, image = ?, infoImage = ?
            WHERE id = ?
        `;
        connection.query(
            sql,
            [
                lesson.lesson_name,
                JSON.stringify(lesson.information),
                JSON.stringify(lesson.chords),
                lesson.image,
                JSON.stringify(lesson.infoImage),
                id
            ],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows);
                }
            }
        );
    });
}
function deleteLesson(id) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM lessons WHERE id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result.affectedRows);
        });
    });
}

module.exports = {
    getLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson
};
