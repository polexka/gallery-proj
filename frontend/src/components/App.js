import React, { useState, useEffect } from 'react';
import { withRouter, Route, Switch, useHistory } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import { api } from '../utils/Api';
import { CurrentAuthContext } from '../contexts/CurrentAuthContext';
import { auth } from '../utils/Auth';

function App() {

  const history = useHistory();


  const [currentAuth, setAuth] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const [infoTooltipStatus, setInfoTooltipStatus] = useState(false);

  useEffect(() => {
    auth.authorization(localStorage.getItem('token'))
      .then((res) => {
        setAuth(res);
        setLoginStatus(true);
        history.push('/');
      })
      .catch((err) => {
        console.log(`Ошибка авторизации: ${err}`);
        setLoginStatus(false);
      })
  }, [loginStatus])

  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltip] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((res) => {
        setAuth(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных пользователя: ${err}`);
      })
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((res) => {
        setAuth(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления аватара пользователя: ${err}`);
      })
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards([...res.reverse()]);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки карточек: ${err}`);
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentAuth._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // получаем ответ с массивом карточек, каждую из карточек проверяем на соответствие айди, если верно то перерисовываем карту
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      })
      .catch((err) => {
        console.log(`Ошибка загрузки карточек: ${err}`);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => (item._id !== card._id) ? item : null))
      })
      .catch((err) => {
        console.log(`Ошибка загрузки карточек: ${err}`);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.uploadCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка загрузки карточки: ${err}`);
      })
    return true;
  }

  // emasdasail@yandex.ru somepassword

  function handleSignUpFormSubmit(data) {
    auth.signup(data)
      .then((res) => {
        setInfoTooltipStatus(true);
        history.push('/sign-in');
      })
      .catch((err) => {
        console.log(`Ошибка регистрации: ${err}`);
        setInfoTooltipStatus(false);
      })
    setInfoTooltip(true);
  }

  function handleSignInSubmit(data) {
    auth.signin(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setInfoTooltipStatus(true);
        auth.authorization(localStorage.getItem('token'))
          .then((res) => {
            setAuth(res);
            setLoginStatus(true);
            history.push('/');
          })
          .catch((err) => {
            console.log(`Ошибка авторизации: ${err}`);
            setLoginStatus(false);
          })

      })
      .catch((err) => {
        console.log(`Ошибка входа: ${err}`);
        setInfoTooltipStatus(false);
        setInfoTooltip(true);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setAuth({});
    setLoginStatus(false);
  }

  function closeAllPopups() {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setInfoTooltip(false);
    setSelectedCard(null);
  }

  return (

    <CurrentAuthContext.Provider value={currentAuth}>
      <div className="page">
        <Header handleSignOut={handleSignOut} />
        <Switch>

          <Route path="/sign-in">
            <Login
              loggedIn={loginStatus}

              onSubmit={handleSignInSubmit} />
          </Route>

          <Route path="/sign-up">
            <Register
              loggedIn={loginStatus}

              onSubmit={handleSignUpFormSubmit} />
          </Route>

          <ProtectedRoute
            path="/"
            loggedIn={loginStatus}

            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
        </Switch>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups}></PopupWithForm>

        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} isSucceed={infoTooltipStatus} />

        <Footer />
      </div>
    </CurrentAuthContext.Provider>

  );
}

export default withRouter(App);
// localStorage.removeItem('token');