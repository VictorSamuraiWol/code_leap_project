import './style.css';
import PopupDefault from '../PopupDefault';

function PopupUserNotFound({ close, text }) {

  return (
    <PopupDefault 
      close={close} 
      text={text} 
    />

  )

}

export default PopupUserNotFound;
