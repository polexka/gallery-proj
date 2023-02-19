import { Link, withRouter } from 'react-router-dom'; 
import Form from "./Form";
import { useForm } from "../hooks/useForm";

function Register(props) {

  const form = useForm({email: '', password: ''});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.values.email, form.values.password);
    props.onSubmit({
      email: form.values.email,
      password: form.values.password
    });
  }

  function handleChange(e) {
    form.handleChange(e);
  }

  return (
    <div className="auth">

      <Form
        title="Регистрация"
        name="sign-up"
        onSubmit={handleSubmit}
        button="Зарегистрироваться"
        dark
      >
        <label className="form__field">
        <input 
            type="email" 
            name="email" 
            id="email-input" 
            placeholder="Email" 
            className="form__input form__input_dark" 
            value={form.values.email} 
            onChange={handleChange} 
            required minLength="2" maxLength="40" />
          <span className="email-input-error form__input-error"></span>
        </label>
        <label className="form__field">
        <input 
            type="password" 
            name="password" 
            id="password-input" 
            placeholder="Пароль" 
            className="form__input form__input_dark" 
            value={form.values.password} 
            onChange={handleChange} 
            required minLength="2" maxLength="200" />
          <span className="password-input-error form__input-error"></span>
        </label>
      </Form>
      <p className="auth__signin">
        Уже зарегистрированы?
        <Link to="/sign-in" className="link auth__link">
          Войти
        </Link>
      </p>
    </div>
  )
}

export default withRouter(Register);