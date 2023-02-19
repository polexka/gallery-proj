import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from '../hooks/useForm';

function AddPlacePopup(props) {

  const form = useForm({name: '', link: '' });

  useEffect(() => {
    form.setValues({
      name: '', 
      link: '' 
    })
  }, [props.isOpen]);

  function handleClose() {
    props.onClose();
  }

  function handleChange(e) {
    form.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: form.values.name,
      link: form.values.link
    })
  }

  return (
    <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
      <label className="form__field">
        <input
          type="text"
          name="name"
          id="card-title-input"
          placeholder="Название"
          className="form__input"
          value={form.values.name || ''}
          onChange={handleChange}
          required minLength="2" maxLength="30" />
        <span className="card-title-input-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input
          type="url"
          name="link"
          id="card-link-input"
          placeholder="Ссылка на картинку"
          className="form__input"
          value={form.values.link || ''}
          onChange={handleChange}
          required />
        <span className="card-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;