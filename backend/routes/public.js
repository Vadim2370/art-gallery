const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');
const { signInValidation, signUpValidation } = require('../middlewares/validation');

router.post('/signin', signInValidation, login);
router.post('/signup', signUpValidation, createUser);
router.get('/signout', logout);

module.exports = router;
