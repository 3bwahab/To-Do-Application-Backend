const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

router.post(
  '/register',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Please include a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  userController.register
);

router.post(
  '/login',
  [
    check('email').isEmail().withMessage('Please include a valid email'),
    check('password').not().isEmpty().withMessage('Password is required')
  ],
  userController.login
);

router.get('/', userController.getUsers); // Protected route

module.exports = router;
