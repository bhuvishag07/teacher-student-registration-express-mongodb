const express = require('express');
const bcrypt = require('bcrypt');

const Student = require('../model/studentModel');

const studentRouter = express.Router();

studentRouter.post('/register', async (req, res) => {

    const { name, email, password, course, age } = req.body;

    if (!name || !email || !password || !course || !age) {
        return res.status(400).send('All student fields are required');
    }

    if (age < 16 || age > 100) {
        return res.status(400).send('Age must be between 16 and 100');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await Student.create({
            name,
            email,
            password: hashedPassword,
            course,
            age
        });

        res.send('Student registered successfully');

    } catch (error) {
        res.status(500).send('Student registration failed');
    }
});

module.exports = studentRouter;