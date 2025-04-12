const express = require('express')
const cors = require('cors');
require('./initSchema');

const app = express()
const port = 3000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('public'));

const lessonsRoutes = require('./routes/lessonsRoutes');

app.use(lessonsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
