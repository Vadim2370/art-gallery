import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  card, onCardClick, onCardDelete, onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? '' : 'element__delete_hidden'
  }`;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__liked' : ''
  }`;
  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  return (
    <li className="element">
      <figure className="element__figure">
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
          aria-label="Удалить"
        ></button>
        <button
          type="button"
          className="element__large"
          aria-label="Увеличить"
          onClick={handleCardClick}
        >
          <img className="element__image" src={card.link} alt={card.name} />
        </button>
        <figcaption className="element__caption">
          <h2 className="element__caption-text">{card.name}</h2>
          <div className="element__like-column">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleCardLike}
              aria-label="Нравится"
            ></button>
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
