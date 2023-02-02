import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import useValidationForm from '../hooks/useValidationForm';

function EditProfilePopup({
  isOpen, onClose, onUpdateUser, isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  } = useValidationForm({ name: '', about: '' });

  useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
    setIsValid(true);
    resetForm();
  }, [currentUser, isOpen, setValues, setIsValid, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name: values.name, about: values.about });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      buttonLoadingTitle="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <input
        id="input-name"
        className="popup__input popup__input_type_name"
        name="name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        value={values.name ?? ''}
        onChange={handleChange}
        autoComplete="off"
      />
      <span
        className={`popup__input-error input-name-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {!isValid && errors.name}
      </span>
      <input
        id="input-about"
        className="popup__input popup__input_type_about"
        name="about"
        type="text"
        placeholder="Занятие"
        minLength="2"
        maxLength="200"
        required
        value={values.about ?? ''}
        onChange={handleChange}
        autoComplete="off"
      />
      <span
        className={`popup__input-error input-about-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {errors.about}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
