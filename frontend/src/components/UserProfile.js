import React from 'react';
import Card from './Card';
import { CurrentAuthContext } from '../contexts/CurrentAuthContext';
import { useParams, withRouter } from 'react-router-dom/cjs/react-router-dom';

function UserProfile(props) {
  const currentUser = React.useContext(CurrentAuthContext);
  const { userId } = useParams();

  console.log(userId);

  return (
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__wrap">
          <div className="profile__image-wrap">
            <div className="profile__image-view"></div>
            <img className="profile__image" src={currentUser.avatar} alt="Изображение профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__info-wrap">
              <h1 className="profile__name">
                LALLALAL
              </h1>
            </div>
            <p className="profile__caption">
              ABOUT
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <ul className="cards">
          {/* {props.cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} key={card._id} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))} */}
        </ul>
      </section>
    </main>
    </>
    
  )
}

export default withRouter(UserProfile);