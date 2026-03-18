import style from './style.css';
import InputDefault from '../InputDefault';
import LabelDefault from '../LabelDefault';
import TextareaDefault from '../TextareaDefault';
import ButtonDefault from '../ButtonDefault';
import Cards from '../Cards';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';

function Main() {
  
  const { user, inputMainScreenPageValue, setInputMainScreenPageValue, textareaMainScreenPageValue, setTextareaMainScreenPageValue, 
    setPostApi, activeMainScreenPage, activeMainScreenModalEdit } = useContext(DataContext)

  useEffect(() => {
    setInputMainScreenPageValue('')
    setTextareaMainScreenPageValue('')

  }, [])

  useEffect(() => {
    // function that check the input and textarea values 
    function digitInputTextArea() {
      const mainScreenButton = document.querySelector('#mainScreenButton')      
      
      if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && (inputMainScreenPageValue !== '') && (textareaMainScreenPageValue !== '')) {
        mainScreenButton?.classList.add('newSpecificStyleMainScreenButton')
        mainScreenButton?.classList.remove('specificStyleMainScreenButton')
  
      } else if ((activeMainScreenPage === true) && (activeMainScreenModalEdit === false) && ((inputMainScreenPageValue === '') || (textareaMainScreenPageValue === ''))) {
        mainScreenButton?.classList.add('specificStyleMainScreenButton')
        mainScreenButton?.classList.remove('newSpecificStyleMainScreenButton')
  
      }

    }

    digitInputTextArea()

  }, [activeMainScreenPage, activeMainScreenModalEdit, inputMainScreenPageValue, textareaMainScreenPageValue])

  // function that clean the input and textarea fields
  function clean() {
    setInputMainScreenPageValue('')
    setTextareaMainScreenPageValue('')

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
            placeholder='Hello world' 
            valueInput={inputMainScreenPageValue} 
          />
        </div>

        <div className='main-content-card-create-label-input-textarea'>
          <LabelDefault 
            forLabel='content' 
            nameLabel='Content' 
          />
          <TextareaDefault
            id='content'
            nameTextarea='content'
            placeholder='Content here'
            valueTextarea={textareaMainScreenPageValue} 
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
