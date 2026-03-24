import './style.css';
import clickSound from '../../sounds/click-sound.mp3'

function ButtonDefault({ id, specificStyleButton, onClick, type, nameButton }) {

  const clickSoundAudio = new Audio(clickSound)

  return (
    <button 
      id={id}
      className={`button ${specificStyleButton}`}
      onClick={() => {clickSoundAudio.play(); onClick && onClick()}}
      type={type}
    >
      {nameButton}
    </button>

  )

}

export default ButtonDefault;
