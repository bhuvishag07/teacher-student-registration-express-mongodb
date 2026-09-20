# Assignment 11 – Teacher and Student Registration Using Express.js and MongoDB

## Student Details

**Name:** Bhuvisha Gohil

**Roll Number:** 150096725190

**Course:** B.Tech CSE

**Year:** Second Year

## Assignment Objective

The objective of this assignment is to create an Express.js application that allows teachers and students to register and store their details in a MongoDB database using Mongoose.

Separate schemas, models, and routers are created for teachers and students. Registration data is validated before storing it, and passwords are hashed using bcrypt.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt
* JavaScript
* Postman
* MongoDB Compass





## Folder Structure

<img width="372" height="612" alt="image" src="https://github.com/user-attachments/assets/dffa7b95-51db-45d8-a88c-fcee89c2792b" />

## Description of Files

### server.js

Creates the Express server, connects the application to MongoDB using Mongoose, enables JSON data handling, and connects both teacher and student routers.

### schema/teacherSchema.js

Defines the Teacher schema with the following fields:

* Name
* Email
* Password
* Subject

### schema/studentSchema.js

Defines the Student schema with the following fields:

* Name
* Email
* Password
* Course
* Age

### model/teacherModel.js

Creates the Teacher model using the Teacher schema.

### model/studentModel.js

Creates the Student model using the Student schema.

### router/teacherRouter.js

Handles teacher registration, validates the received data, hashes the password using bcrypt, and stores the teacher data in MongoDB.

### router/studentRouter.js

Handles student registration, validates the received data including age, hashes the password using bcrypt, and stores the student data in MongoDB.

## MongoDB Connection

The application connects to MongoDB using Mongoose.

Database used:

```text
assignment11
```

When the connection is successful, the terminal displays:

```text
MongoDB connected successfully
Server is running on port 2000
```

## Teacher Registration

### Endpoint

```text
POST http://localhost:2000/teacher/register
```

### Request Body

```json
{
    "name": "Amit Sharma",
    "email": "amit@gmail.com",
    "password": "amit123",
    "subject": "Database Management"
}
```

### Successful Response

```text
Teacher registered successfully
```

Teacher data is stored in the MongoDB `teachers` collection.

## Student Registration

### Endpoint

```text
POST http://localhost:2000/student/register
```

### Request Body

```json
{
    "name": "Priya Shah",
    "email": "priya@gmail.com",
    "password": "priya123",
    "course": "B.Tech CSE",
    "age": 20
}
```

### Successful Response

```text
Student registered successfully
```

Student data is stored in the MongoDB `students` collection.

## Validation

The application validates the registration data before storing it.

### Teacher Validation

The following fields are required:

* Name
* Email
* Password
* Subject

If a required field is missing, the application returns:

```text
All teacher fields are required
```

### Student Validation

The following fields are required:

* Name
* Email
* Password
* Course
* Age

The student age must be between 16 and 100.

If the age is outside the valid range, the application returns:

```text
Age must be between 16 and 100
```

## Password Hashing

Passwords are hashed using bcrypt before being stored in MongoDB.

For example, the password:

```text
amit123
```

is not stored directly. MongoDB stores a bcrypt hash similar to:

```text
$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

This ensures that the original password is not stored as plain text.

## Expected Flow

### Teacher

```text
POST /teacher/register
        ↓
Teacher Schema Validation
        ↓
Hash Password
        ↓
Teacher MongoDB Collection
        ↓
Success Response
```

### Student

```text
POST /student/register
        ↓
Student Schema Validation
        ↓
Hash Password
        ↓
Student MongoDB Collection
        ↓
Success Response
```

## Error Handling

The application handles invalid registration data and database errors.

* **400 Bad Request** – Validation errors
* **500 Internal Server Error** – Registration/database errors

## Testing

The application was tested using Postman for teacher and student registration.

MongoDB Compass was used to verify that the data was successfully stored in the respective collections.

The stored passwords were also checked to confirm that bcrypt hashing was applied.

## Screenshots

### 1. Successful MongoDB Connection

<img width="860" height="230" alt="image" src="https://github.com/user-attachments/assets/a9b2b676-3284-42cb-a5a9-20631e23ee6c" />



Terminal showing:

```text
MongoDB connected successfully
Server is running on port 2000
```

### 2. Teacher Registration

<img width="1912" height="1082" alt="C4C916E9-F7E7-4107-A6C2-89368DF76AC2" src="https://github.com/user-attachments/assets/2686956f-19f9-4dd1-b087-87144161b47c" />

Postman showing the successful teacher registration request and response.

### 3. Student Registration

<img width="2080" height="674" alt="00636C52-04D2-4783-92DC-D6CDF087DB7C" src="https://github.com/user-attachments/assets/5811359e-d389-4bbe-bcbd-2896c65ec857" />


Postman showing the successful student registration request and response.

### 4. Teacher Data in MongoDB

<img width="2536" height="682" alt="866029B4-9D32-48FA-B5A1-9963BF23BA69" src="https://github.com/user-attachments/assets/783d20fa-2619-499c-a3f2-aab89e1e2752" />


MongoDB Compass showing the `teachers` collection and stored teacher data.

### 5. Student Data in MongoDB

<img width="2558" height="854" alt="13C634D9-E67C-468B-BF46-61FDA946DD1B" src="https://github.com/user-attachments/assets/f6b681d6-d9ea-4dd6-9368-c93fc57277db" />


MongoDB Compass showing the `students` collection and stored student data.

### 6. Hashed Password

<img width="1312" height="256" alt="image" src="https://github.com/user-attachments/assets/81c10ae2-d1ce-4419-845e-4d810f811c4a" />


MongoDB Compass showing the password stored in hashed form using bcrypt.

## Conclusion

The Teacher and Student Registration application was successfully created using Express.js, MongoDB, and Mongoose. Separate schemas, models, and routers were implemented for teachers and students. Registration data is validated before storage, passwords are securely hashed using bcrypt, and the data is stored in separate MongoDB collections.
