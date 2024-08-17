const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const validateStudent = require("../middlewares/validateStudent");

router.post("/students", validateStudent, studentController.createStudent);
router.get("/students", studentController.getAllStudents);
router.get("/students/:id", studentController.getStudentById);
router.put("/students/:id", validateStudent, studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
