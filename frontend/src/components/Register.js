import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useValidationForm from '../hooks/useValidationForm';

function Register({ handleRegister, isLoading }) {
  const {
    values, errors, handleChange, resetForm, isValid, setIsValid,
  } = useValidationForm();
  const buttonTitle = 'Зарегистрироваться';
  const buttonLoadingTitle = 'Регистрация...';
  useEffect(() => {
    setIsValid(false);
    resetForm();
  }, [resetForm, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(values);
  }

  return (
    <section className="popup popup__page popup-register popup_opened">
      <form
        className="popup__form poup__form-register"
        name="register"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title popup__title-page">Регистрация</h2>
        <label htmlFor='name'>
        <input
          className="popup__input popup__input-page popup__input_type_email"
          id="input-name"
          type="name"
          name="name"
          placeholder="Имя"
          value={values.name ?? ''}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="error popup__input-error input-register-name-error popup__input-error_active">{errors.name}</span>
        </label>
        <label htmlFor='password'>
        <input
          className="popup__input popup__input-page popup__input_type_password"
          id="input-password"
          type="password"
          name="password"
          placeholder="Пароль"
          value={values.password ?? ''}
          onChange={handleChange}
          minLength="4"
          maxLength="30"
          required
        />
        <span className="error popup__input-error input-register-password-error popup__input-error_active">{errors.password}</span>
        </label>
        <button
          className="popup__submit popup__submit-page popup__submit-register"
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? buttonLoadingTitle : buttonTitle}
        </button>
        <div className="popup__subtitle">
          <span className="popup__subtitle-text">Уже зарегистрированы?</span>
          <Link className="button popup__subtitle-button" to="/sign-in">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
