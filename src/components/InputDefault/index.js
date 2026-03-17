import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function InputDefault({ placeholder, id, nameInput, type, valueInput, required, setNewTitle }) {

  const { setUser, activeSignupPage, activeMainScreenPage, activeMainScreenModalEdit, setDigitInputSignup, 
    setDigitInputMainScreen, setDigitInputMainScreenModalEdit, setInputMainScreenPageValue } = useContext(DataContext)
  
  // function that verify the input value
  function onChangeName(e) {
    const value = e.target.value
    const signupButton = document.querySelector('#signupButton')

    if ((activeSignupPage === true) && (value !== '')) {
      setUser(value)
      signupButton.classList.add('newSpecificStyleButton')
      signupButton.classList.remove('specificStyleButton')
      setDigitInputSignup(true)

    } else if ((activeSignupPage === true) && (value === '')) {
      signupButton.classList.add('specificStyleButton')
      signupButton.classList.remove('newSpecificStyleButton')
      setDigitInputSignup(false)

    } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (value !== '')) {
      setDigitInputMainScreen(true)
      setInputMainScreenPageValue(value)

    } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (value === '')) {
      setDigitInputMainScreen(false)
      setInputMainScreenPageValue(value)

    } else if ((activeMainScreenModalEdit === true) && (value !== '')) {
      setDigitInputMainScreenModalEdit(true)
      setNewTitle(value)
    
    } else if ((activeMainScreenModalEdit === true) && (value === '')) {
      setDigitInputMainScreenModalEdit(false)
      setNewTitle(value)
    
    } else {
      console.error('Something is wrong or more conditions are needed.')

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
      required={required}
    />
    
  )

}

export default InputDefault;
