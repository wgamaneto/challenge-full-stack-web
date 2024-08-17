const { body, validationResult } = require("express-validator");

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
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateStudent;
