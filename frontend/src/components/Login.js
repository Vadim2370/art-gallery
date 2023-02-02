import { useEffect } from 'react';
import useValidationForm from '../hooks/useValidationForm';

function Login({ handleLogin, isLoading }) {
  const {
    values, errors, handleChange, resetForm, isValid, setIsValid,
  } = useValidationForm();
  const buttonTitle = 'Войти';
  const buttonLoadingTitle = 'Входим...';

  useEffect(() => {
    setIsValid(false);
    resetForm();
  }, [resetForm, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values);
  }

  return (
    <section className="popup popup__page popup-login popup_opened">
      <form
        className="popup__form poup__form-login"
        name="login"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title popup__title-page">Вход</h2>
        <label htmlFor='name'>
        <input
          className="popup__input popup__input-page popup__input_type_email"
          id="input-name"
          type="name"
          name="name"
          placeholder="Имя"
          /* pattern="^\S+@\S+\.\S+$" */
          value={values.name ?? ''}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="error popup__input-error input-login-name-error popup__input-error_active">{errors.name}</span>
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
        <span className="error popup__input-error input-login-password-error popup__input-error_active">{errors.password}</span>
        </label>
        <button
          className="popup__submit popup__submit-page popup__submit-login"
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? buttonLoadingTitle : buttonTitle}
        </button>
      </form>
    </section>
  );
}

export default Login;
