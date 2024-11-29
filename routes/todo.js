const express = require('express');
const to = require('../controller/todo');
const au = require('../middlewere/auth');  // Corrected the spelling to "middleware"

const router = express.Router();

router.post('/createTodo',to.createTodo);
router.get('/show', to.show); 
router.delete('/delete/:id',to.delete);
router.patch('/updete/:id',to.updete);

module.exports = router;
