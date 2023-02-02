import React from 'react';
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip({ isOpen, onClose, isRegistered }) {
  return (
    <section
      className={`popup popup-tooltip ${isOpen && 'popup_opened'}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <div className="popup__container popup__container_tooltip">
        <form className="popup__form popup__form-tooltp">
          <img
            className="popup__tooltip-image"
            src={isRegistered ? success : fail}
            alt={isRegistered ? 'Успешно' : 'Ошибка'}
          />
          <h2 className="popup__title popup__title-tooltip">
            {isRegistered
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте еще раз.'}
          </h2>

          <button
            type="button"
            className="popup__close popup__button-close"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </section>
  );
}

export default InfoTooltip;
