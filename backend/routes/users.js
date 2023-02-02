const router = require('express').Router();
const { userProfileValidation, userAvatarValidation, userIdValidation } = require('../middlewares/validation');
const {
  getUsers,
  getUserInfo,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getUserInfo);
router.get('/users/:userId', userIdValidation, getUserById);
router.patch('/users/me', userProfileValidation, updateUserProfile);
router.patch('/users/me/avatar', userAvatarValidation, updateUserAvatar);

module.exports = router;
