import style from './style.css';
import InputDefault from '../InputDefault';
import LabelDefault from '../LabelDefault';
import TextareaDefault from '../TextareaDefault';
import ButtonDefault from '../ButtonDefault';
import Cards from '../Cards';
import { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';

function Main() {
  
  const { user, digitInputMainScreen, setDigitInputMainScreen, digitTextareaMainScreen, setDigitTextareaMainScreen, 
    inputMainScreenPageValue, setInputMainScreenPageValue, textareaMainScreenPageValue, setTextareaMainScreenPageValue, 
    setPostApi, activeMainScreenPage, activeMainScreenModalEdit, digitInputMainScreenModalEdit, digitTextareaMainScreenModalEdit } = useContext(DataContext)

  useEffect(() => {
    // function that check the input and textarea values 
    function digitInputTextArea() {
      const mainScreenButton = document.querySelector('#mainScreenButton')
      const modalEditSaveButton = document.querySelector('#modalEditSaveButton')

      if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (digitInputMainScreen === true) && (digitTextareaMainScreen === true)) {
        mainScreenButton?.classList.add('newSpecificStyleButton')
        mainScreenButton?.classList.remove('specificStyleButton')
  
      } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && ((digitInputMainScreen === false) || (digitTextareaMainScreen === false))) {
        mainScreenButton?.classList.add('specificStyleButton')
        mainScreenButton?.classList.remove('newSpecificStyleButton')
  
      } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === true) && (digitInputMainScreenModalEdit === true) && (digitTextareaMainScreenModalEdit === true)) {
        modalEditSaveButton?.classList.add('newSpecificStyleModalEditSaveButton')
        modalEditSaveButton?.classList.remove('specificStyleButton')
  
      } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === true) && ((digitInputMainScreenModalEdit === false) || (digitTextareaMainScreenModalEdit === false))) {
        modalEditSaveButton?.classList.add('specificStyleButton')
        modalEditSaveButton?.classList.remove('newSpecificStyleModalEditSaveButton')

      }

    }

    digitInputTextArea()

  }, [digitInputMainScreen, digitTextareaMainScreen, activeMainScreenPage, activeMainScreenModalEdit, digitInputMainScreenModalEdit, digitTextareaMainScreenModalEdit])

  // function that clean the input and textarea fields
  function clean() {
    setInputMainScreenPageValue('')
    setTextareaMainScreenPageValue('')

    setDigitInputMainScreen(false)
    setDigitTextareaMainScreen(false)

  }

  // Function that uses POST method to create users in the API
  async function onSave(e) {
    e.preventDefault();
    let data = '';
    setPostApi(false)

    data = {
      username: user,
      title: inputMainScreenPageValue,
      content: textareaMainScreenPageValue,
      date: Date.now()
    }

    try {
      const response = await fetch('http://localhost:3001/codeLeapNetwork', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)                
      })

      if (response.ok) {
        console.log(data, 'Data successfully submitted!');
        alert('Data successfully submitted!');
        setPostApi(true)
        clean()

      }

    } catch(error) {
      console.error('Error while submitting data', error)

    } 

  }

  return (
    <div className='main-content'>
      <form 
        onSubmit={onSave}
        className='main-content-card-create'
      >
        <h1>What's on your mind?</h1>

        <div className='main-content-card-create-label-input-textarea'>
          <LabelDefault 
            forLabel='title' 
            nameLabel='Title'  
          />
          <InputDefault
            id='title'
            valueInput={inputMainScreenPageValue} 
            placeholder='Hello world' 
          />
        </div>

        <div className='main-content-card-create-label-input-textarea'>
          <LabelDefault 
            forLabel='content' 
            nameLabel='Content' 
          />
          <TextareaDefault
            nameTextarea='content'
            id='content'
            valueTextarea={textareaMainScreenPageValue} 
            placeholder='Content here'
            rows='6'
            cols='40'
          />
        </div>

        <div className='main-content-card-create-button'>
          <ButtonDefault
            id='mainScreenButton'
            nameButton='Create' 
            type='submit'
            specificStyleButton='specificStyleButton'
          />
        </div>

      </form>

      <Cards />

    </div>
  )

}

export default Main;
