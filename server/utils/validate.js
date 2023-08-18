const { validationResult, param } = require("express-validator");

const validateGetGameByName = [
  param("name").trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "error occured!!!" });
    }
    console.log("validation Passed");
    next(); // Proceed to the controller if validation passed
  },
];

module.exports = validateGetGameByName;
