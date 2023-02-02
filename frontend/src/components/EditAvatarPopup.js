import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useValidationForm from '../hooks/useValidationForm';

function EditAvatarPopup({
  isOpen, onClose, onUpdateUser, isLoading,
}) {
  const avatarRef = useRef();
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  } = useValidationForm({ avatar: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ avatar: avatarRef.current.value });
  }

  useEffect(() => {
    setValues({ avatar: '' });
    setIsValid(false);
    resetForm();
  }, [setValues, setIsValid, isOpen, resetForm]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      buttonLoadingTitle="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <input
        id="input-avatar"
        className="popup__input popup__input_type_avatar-link"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
        onChange={handleChange}
        value={values.avatar}
      />
      <span
        className={`popup__input-error input-avatar-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
