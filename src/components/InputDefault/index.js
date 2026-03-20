import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function InputDefault({ placeholder, id, nameInput, type, valueInput, required, setNewTitle }) {

  const { activeSignupPage, activeMainScreenPage, activeMainScreenModalEdit, setUser,  
    setInputMainScreenPageValue } = useContext(DataContext)
  
  // function that verify the input value
  function onChangeName(e) {
    const value = e.target.value
    const signupButton = document.querySelector('#signupButton')

    if ((activeSignupPage === true) && (value !== '')) {
      setUser(value)
      signupButton.classList.add('newSpecificStyleSignupButton')
      signupButton.classList.remove('specificStyleSignupButton')

    } else if ((activeSignupPage === true) && (value === '')) {
      setUser(value)
      signupButton.classList.add('specificStyleSignupButton')
      signupButton.classList.remove('newSpecificStyleSignupButton')

    } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (value !== '')) {
      setInputMainScreenPageValue(value)

    } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (value === '')) {
      setInputMainScreenPageValue(value)

    } else if ((activeMainScreenModalEdit === true) && (value !== '')) {
      setNewTitle(value)
    
    } else if ((activeMainScreenModalEdit === true) && (value === '')) {
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
      autoComplete='off'
    />
    
  )

}

export default InputDefault;
