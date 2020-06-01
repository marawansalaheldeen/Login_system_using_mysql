const {createUser,getAllUsers,findUserById,removingUser,updateUserById} = require('./controller');
const express = require('express');
const router = express.Router();


router.post('/',createUser);
router.get('/',getAllUsers);
router.get('/user/:id',findUserById);
router.delete('/user/:id',removingUser);
router.patch('/user/:id',updateUserById);

module.exports = router;

