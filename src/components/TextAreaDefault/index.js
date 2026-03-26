import './style.css';
import { DataContext } from '../DataContext';
import { useContext } from 'react';

function TextAreaDefault({ placeholder, valueTextarea, id, nameTextarea, rows, cols, required, setNewContent }) {

  const { activeMainScreenPage, activeMainScreenModalEdit, setTextareaMainScreenPageValue } = useContext(DataContext)

  // function that verify the textarea value
  function onChangeName(e) {
    let value = e.target.value

    if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && e.target.value !== '') {
      setTextareaMainScreenPageValue(value)

    } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && e.target.value === '') {
      setTextareaMainScreenPageValue(value)

    } else if ((activeMainScreenModalEdit === true) && (value !== '')) {
      setNewContent(value)
    
    } else if ((activeMainScreenModalEdit === true) && (value === '')) {
      setNewContent(value)
  
    } else {
      console.error('Something is wrong or more conditions are needed.')

    }

  }

  return (
    <textarea
      id={id}
      name={nameTextarea}
      onChange={onChangeName}
      placeholder={placeholder} 
      value={valueTextarea}
      rows={rows}
      cols={cols}
      required={required}
      autoComplete='off'
    />

  )

}

export default TextAreaDefault;
