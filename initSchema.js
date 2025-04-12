const connection = require('./connection');

// Create table if not exists
const createLessonsTable = `
    CREATE TABLE IF NOT EXISTS lessons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        lesson_name VARCHAR(255) NOT NULL,
        information JSON NOT NULL,
        chords JSON NOT NULL,
        image VARCHAR(255) NOT NULL,
        infoImage JSON NOT NULL
    );
`;

const seedDataLessonsTable = `
INSERT INTO lessons (lesson_name, information, chords, image, infoImage)
VALUES
    (
        'Introduction to Piano',
        JSON_ARRAY(
            'Notes on a piano are grouped in sets of 12 notes, this is called an octave',
            'In this lesson you learn to identify each note on the keyboard',
            'Practice playing each note from left to right on the octave'
        ),
        JSON_ARRAY(
            JSON_ARRAY('C'),
            JSON_ARRAY('C#'),
            JSON_ARRAY('D'),
            JSON_ARRAY('D#'),
            JSON_ARRAY('E'),
            JSON_ARRAY('F'),
            JSON_ARRAY('F#'),
            JSON_ARRAY('G'),
            JSON_ARRAY('G#'),
            JSON_ARRAY('A'),
            JSON_ARRAY('A#'),
            JSON_ARRAY('B')
        ),
        'LessonesImages/lessone.1.webp',
        JSON_ARRAY(
            'pianoimg/piano1.png',
            'pianoimg/piano3.png',
            'pianoimg/piano5.png'
        )
    )
`;

connection.query(createLessonsTable, (err, result) => {
    if (err) {
        console.error('Error creating lessons table:', err);
        return;
    }
    console.log('Lessons table created or already exists.');

    const checkIfEmpty = `SELECT COUNT(*) AS count FROM lessons`;
    connection.query(checkIfEmpty, (err, results) => {
        const count = results[0].count;
        if (count === 0) {
            connection.query(seedDataLessonsTable, (err, result) => {
                if (err) {
                    console.error('Error seeding lessons table:', err);
                    return;
                }
                console.log('Lessons table seeded successfully.');
            });
        } else {
            console.log('Lessons table already has data. No seeding required.');
        }
    });

});
