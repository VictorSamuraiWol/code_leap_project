import style from './style.css';
import { DataContext } from '../DataContext';
import { useContext } from 'react';

function TextAreaDefault({ placeholder, valueTextarea, id, nameTextarea, rows }) {

  const { activeMainScreenPage, setDigitTextarea, setTextareaMainScreenPageValue } = useContext(DataContext)

  function onChangeName(e) {
    let value = e.target.value

    if ((activeMainScreenPage === true) && e.target.value !== '') {
      // let value = e.target.value
      setDigitTextarea(true)
      setTextareaMainScreenPageValue(value)

    } else {
      // let value = e.target.value
      setDigitTextarea(false)
      setTextareaMainScreenPageValue(value)
      console.log('else', activeMainScreenPage, e.target.value !== '')

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
    />

  )

}

export default TextAreaDefault;
