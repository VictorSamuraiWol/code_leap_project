import style from './style.css';
import { DataContext } from '../DataContext';
import { useContext } from 'react';

function TextAreaDefault({ placeholder, valueTextarea, id, nameTextarea, rows, cols }) {

  const { activeMainScreenPage, setDigitTextarea, setTextareaMainScreenPageValue } = useContext(DataContext)

  // function that verify the textarea change
  function onChangeName(e) {
    let value = e.target.value

    if ((activeMainScreenPage === true) && e.target.value !== '') {
      setDigitTextarea(true)
      setTextareaMainScreenPageValue(value)

    } else if ((activeMainScreenPage === true) && e.target.value === '') {
      setDigitTextarea(false)
      setTextareaMainScreenPageValue(value)

    } else {
      setDigitTextarea(false)
      setTextareaMainScreenPageValue(value)

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
    />

  )

}

export default TextAreaDefault;
