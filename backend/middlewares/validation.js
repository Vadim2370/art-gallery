const { celebrate, Joi } = require('celebrate');
const { REG_URL } = require('../utils/constans');

const signInValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

const signUpValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    /* about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(REG_URL), */
    /* email: Joi.string()
      .required()
      .email(), */
    password: Joi.string().required(),
  }),
});

const userProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

const userAvatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(REG_URL),
  }),
});

const cardValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(REG_URL),
  }),
});

const userIdValidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
});

const cardIdValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  signInValidation,
  signUpValidation,
  userProfileValidation,
  userAvatarValidation,
  cardValidation,
  userIdValidation,
  cardIdValidation,
};
