import expressValidator from 'express-validator'; 
import { capitalizeFirstLetter } from '../helpers/sanitizationHelper.js';

const { body, validationResult } = expressValidator;

export const validateUser = [
    body('firstName')
        .exists()
        .trim()
        .isAlpha('de-DE', 'en-US')
        .withMessage('First name should be alphanumeric')
        .isLength({ min: 1, max: 50 })
        .withMessage(
            'First name should not be empty, and have more than one and less than 50 characters'
        ), 
    (req, res, next) => {
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: 'Validation errors first name', error: errors }); 
        }

        next();
    },
    body('email')
        .exists()
        .trim()
        .isEmail()
        .withMessage('Enter a valid email address.'),
    function (req, res, next) {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Validation errors email", error: errors.msg });
    }

    next();
  },
];

export const sanitizeUser = [
  body("email").normalizeEmail(),
  (req, res, next) => {
    // let { firstName, lastName } = req.body;
    // firstName = capitalizeFirstLetter(firstName);
    // lastName = capitalizeFirstLetter(lastName);

    req.body.firstName = capitalizeFirstLetter(req.body.firstName);
    req.body.lastName = capitalizeFirstLetter(req.body.lastName);
    next();
  },
];

