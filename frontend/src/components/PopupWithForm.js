import Form from "./Form";

function PopupWithForm (props) {

  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        <Form
          title={props.title}
          name={props.name}
          onSubmit={props.onSubmit}
          button={props.button} >
          {props.children}
        </Form>

      </div>
    </div>
  )
}

export default PopupWithForm;