import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const form = useForm({avatar: ''});

  function handleClose() {
    props.onClose();
  }

  function handleChange(e) {
    form.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(form.values.avatar);
  }

  useEffect(() => {
    form.setValues({avatar: ''});
  }, [props.isOpen]);

  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      button="Сохранить" 
      isOpen={props.isOpen} 
      onClose={handleClose} 
      onSubmit={handleSubmit} >
      <label className="form__field">
        <input 
          type="url" 
          name="avatar" 
          value={form.values.avatar || ''} 
          onChange={handleChange} 
          id="avatar-input" 
          placeholder="Ссылка на картинку" 
          className="form__input" 
          required />
        <span className="avatar-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;