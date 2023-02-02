import React from 'react';

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonTitle,
  buttonLoadingTitle,
  onSubmit,
  isValid,
  isLoading,
}) {
  return (
    <section
      className={`popup popup-${name} ${isOpen && 'popup_opened'}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <div className="popup__container">
        <form
          className={`popup__form popup__form-${name}`}
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          <button
            type="button"
            className="popup__close popup__button-close"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            className={`popup__submit popup__submit-${name} ${
              !isValid && 'popup__submit_disabled'
            }`}
            type="submit"
            disabled={!isValid}
          >
            {isLoading ? buttonLoadingTitle : buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
