import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function InputDefault({ placeholder, id, nameInput, type, valueInput }) {

  const { setUser, setStyleButton, activeSignupPage, activeMainScreenPage, setDigitInput, setInputMainScreenPageValue, digitInput, digitTextarea } = useContext(DataContext)
  
  // function that verify the input change
  function onChangeName(e) {
    let value = e.target.value

    if ((activeSignupPage === true) && (e.target.value !== '')) {
      setUser(value)
      setStyleButton('new-style-button')
      setDigitInput(true)

    } else if ((activeMainScreenPage === true) && (e.target.value !== '')) {
      setDigitInput(true)
      setInputMainScreenPageValue(value)

    } else if ((activeMainScreenPage === true) && (e.target.value === '')) {
      setDigitInput(false)
      setInputMainScreenPageValue(value)

    } else {
      setStyleButton('style-button')
      setDigitInput(false)
      setInputMainScreenPageValue(value)

    }

  }

  return (
    <input
      onChange={onChangeName} 
      placeholder={placeholder} 
      id={id} 
      name={nameInput} 
      type={type}
      value={valueInput}

    />
    
  )

}

export default InputDefault;
