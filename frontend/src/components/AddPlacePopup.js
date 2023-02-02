/* eslint-disable no-console */
import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useValidationForm from '../hooks/useValidationForm';

function AddPlacePopup({
  isOpen, onClose, onAddPlace, isLoading,
}) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  } = useValidationForm({ name: '', link: '' });

  useEffect(() => {
    setValues({ name: '', link: '' });
    setIsValid(false);
    resetForm();
  }, [isOpen, setValues, setIsValid, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: values.name, link: values.link });
  }

  return (
    <PopupWithForm
      action="/upload"
      method="post"
      enctype="multipart/form-data"
      name="card"
      title="Новое место"
      buttonTitle="Создать"
      buttonLoadingTitle="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <input
        id="input-card"
        className="popup__input popup__input_type_card-name"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChange}
        value={values.name}
      />
      <span
        className={`popup__input-error input-card-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {!isValid && errors.name}
      </span>
      <input
        id="file"
        className="popup__input popup__input_type_card-link"
       name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        onChange={handleChange}
        value={values.link}
      />
      <span
        className={`popup__input-error input-link-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {errors.link}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
