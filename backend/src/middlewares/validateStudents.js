const { body, validationResult } = require("express-validator");
const Student = require("../models/Student");

const validateStudent = [
  body("name")
    .isString()
    .notEmpty(),
  body("email").isEmail(),
  body("ra")
    .isString()
    .notEmpty(),
  body("cpf")
    .isString()
    .notEmpty(),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { ra, cpf, email } = req.body;

    // Verificacao de dados existentess
    try {
      const existingRA = await Student.findOne({ where: { ra } });
      if (existingRA) {
        return res.status(400).json({ message: "RA já cadastrado." });
      }

      const existingCPF = await Student.findOne({ where: { cpf } });
      if (existingCPF) {
        return res.status(400).json({ message: "CPF já cadastrado." });
      }

      const existingEmail = await Student.findOne({ where: { email } });
      if (existingEmail) {
        return res.status(400).json({ message: "Email já cadastrado." });
      }

      next();
    } catch (error) {
      console.error("Erro ao verificar duplicidade:", error);
      return res.status(500).json({ message: "Erro interno no servidor." });
    }
  },
];

module.exports = validateStudent;
