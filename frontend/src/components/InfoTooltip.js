import success from '../images/Union.svg'
import failure from '../images/Error.svg'

function InfoTooltip(props) {
  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
    
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
        {
        props.isSucceed ? 
          (
            <div className="info">
            <img className="info__image" src={success} alt="Успешно!" />
            <p className="info__text">Вы успешно зарегистрировались!</p>
            </div>
            
          )
        :
          (
            <div className="info">
            <img className="info__image" src={failure} alt="Ошибка!" />
            <p className="info__text">Что-то пошло не так! Попробуйте ещё раз.</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default InfoTooltip;