import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from '../hooks/useForm';
import { CurrentAuthContext } from '../contexts/CurrentAuthContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentAuthContext);

  const form = useForm({name: '', about: ''});

  function handleClose() {
    props.onClose();
  }

  function handleChange(e) {
    form.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: form.values.name,
      about: form.values.about,
    });
  }

  React.useEffect(() => {
    form.setValues({
      name: currentUser.name, 
      about: currentUser.about
    })
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input 
          type="text" 
          name="name" 
          id="title-input" 
          placeholder="Имя профиля" 
          className="form__input" 
          value={form.values.name || ''} 
          onChange={handleChange} 
          required minLength="2" maxLength="40" />
        <span className="title-input-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input 
          type="text" 
          name="about" 
          id="caption-input" 
          placeholder="Описание" 
          className="form__input" 
          value={form.values.about || ''} 
          onChange={handleChange} 
          required minLength="2" maxLength="200" />
        <span className="caption-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;