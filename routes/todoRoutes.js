const express = require('express');
const { check } = require('express-validator');
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post(
  '/',
  [
    auth,
    check('title').not().isEmpty().withMessage('Title is required'),
    check('user').isMongoId().withMessage('Valid user ID is required')
  ],
  todoController.createTodo
);

router.get('/', auth, todoController.getTodos);

module.exports = router;
