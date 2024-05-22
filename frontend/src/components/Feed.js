import React from 'react';
import Card from './Card';
import { CurrentAuthContext } from '../contexts/CurrentAuthContext';

function Feed(props) {
  const currentUser = React.useContext(CurrentAuthContext);

  return (
    <>
    <main className="content">
      <section className="gallery">
        <ul className="cards">
          {props.cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} key={card._id} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
    </>
    
  )
}

export default Feed;