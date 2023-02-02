/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Card from './Card';
import AddBatton from './AddBatton';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ROOT } from '../utils/constApi';

function Main({

  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const rootUser = currentUser.name === ROOT;
  return (
    <main>
      {rootUser
        ? <AddBatton
      onAddPlace={onAddPlace} /> : null}
      <section className="elements page__section">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
