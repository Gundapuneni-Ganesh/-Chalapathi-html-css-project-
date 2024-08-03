const express = require('express')         // this codes for creating api
const router = express.Router()
const userController = require('../controllers/user.controllers');
// Retrieve all users
router.get('/', userController.findAll);        // findall,crate... are all function names
// Create a new user
router.post('/', userController.create);
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);
// Delete a user with id
router.delete('/:id', userController.delete);
module.exports = router