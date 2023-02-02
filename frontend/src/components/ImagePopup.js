import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_dark popup-image ${card && 'popup_opened'}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <figure className="popup__container-image">
        <button
          type="button"
          className="popup__close popup__button-close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={card ? card.link : ''}
          alt={card ? card.name : ''}
        />
        <figcaption className="popup__image-caption">
          {card ? card.name : ''}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
