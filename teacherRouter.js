const express = require('express');
const bcrypt = require('bcrypt');

const Teacher = require('../model/teacherModel');

const teacherRouter = express.Router();

teacherRouter.post('/register', async (req, res) => {

    const { name, email, password, subject } = req.body;

    if (!name || !email || !password || !subject) {
        return res.status(400).send('All teacher fields are required');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await Teacher.create({
            name,
            email,
            password: hashedPassword,
            subject
        });

        res.send('Teacher registered successfully');

    } catch (error) {
        res.status(500).send('Teacher registration failed');
    }
});

module.exports = teacherRouter;