import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function InputDefault({ placeholder, id, nameInput, type, valueInput }) {

  const { setUser, setStyleButton, activeSignupPage, activeMainScreenPage, setDigitInput, setInputMainScreenPageValue } = useContext(DataContext)
  
  // function that verify the change input
  function onChangeName(e) {
    let value = e.target.value

    if ((activeSignupPage === true) && (e.target.value !== '')) {
      // let value = e.target.value
      setUser(value)
      setStyleButton('new-style-button')
      setDigitInput(true)

    } else if ((activeMainScreenPage === true) && (e.target.value !== '')) {
      // let value = e.target.value
      setDigitInput(true)
      setInputMainScreenPageValue(value)
      console.log('ok')

    } else {
      // let value = e.target.value
      setStyleButton('style-button')
      setInputMainScreenPageValue(value)
      setDigitInput(false)
      console.log('else', activeMainScreenPage, e.target.value !== '')

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
