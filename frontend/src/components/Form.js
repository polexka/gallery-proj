function Form(props) {
  return (
    <>
      <form className="form" name={props.name} onSubmit={props.onSubmit} noValidate>
      <h2 className={props.dark ? `form__title form__title_dark` : `form__title`}>{props.title}</h2>
        {props.children}
        <button className={props.dark ? `form__submit form__submit_dark` : `form__submit`} name="save" type="submit" aria-label={props.button}>
          {props.button}
        </button>
      </form>
    </>
  )
}

export default Form;