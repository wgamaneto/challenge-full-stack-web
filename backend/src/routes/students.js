const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validateStudents = require("../middlewares/validateStudents");

console.log(studentController);

router.post("/students", validateStudents, studentController.createStudent);
router.get("/students", studentController.getStudents);
router.get("/students/:id", studentController.getStudentById);
router.put("/students/:id", validateStudents, studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
