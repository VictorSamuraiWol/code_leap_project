import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function ButtonDefault({ onClick, type, nameButton }) {

  const { styleButton } = useContext(DataContext)

  return (
    <button 
      className={styleButton} 
      onClick={onClick}
      type={type}
    >
      {nameButton}
    </button>

  )

}

export default ButtonDefault;
