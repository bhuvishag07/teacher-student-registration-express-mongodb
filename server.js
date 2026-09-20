const express = require('express');
const mongoose = require('mongoose');

const teacherRouter = require('./router/teacherRouter');
const studentRouter = require('./router/studentRouter');

const app = express();

app.use(express.json());

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

mongoose.connect('mongodb://127.0.0.1:27017/assignment11')
    .then(() => {
        console.log('MongoDB connected successfully');

        app.listen(2000, () => {
            console.log('Server is running on port 2000');
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed');
    });