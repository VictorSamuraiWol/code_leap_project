import style from './style.css';
import ButtonDefault from '../../ButtonDefault';

function PopupDefault({ close, text }) {

  // function that close popup
  function closePopup() {
    close(false)

  }

  return (
    <div className='popupDefault'>
      <span>{text}</span>

      <div className='popupDefaultButton'>
        <ButtonDefault 
          onClick={closePopup}
          nameButton='OK' 
          specificStyleButton='specificStyleButton' 
          type='button' 
        />

      </div>
      
    </div>

  )

}

export default PopupDefault;
