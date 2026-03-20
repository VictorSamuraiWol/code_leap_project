import style from './style.css';

function ButtonDefault({ id, specificStyleButton, onClick, type, nameButton }) {

  return (
    <button 
      id={id}
      className={`button ${specificStyleButton}`}
      onClick={onClick}
      type={type}
    >
      {nameButton}
    </button>

  )

}

export default ButtonDefault;
