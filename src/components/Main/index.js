import style from './style.css';
import InputDefault from '../InputDefault';
import LabelDefault from '../LabelDefault';
import TextAreaDefault from '../TextAreaDefault';
import ButtonDefault from '../ButtonDefault';
import { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';
import Cards from '../Cards';

function Main() {
  
  const { user, setStyleButton, digitInput, digitTextarea, inputMainScreenPageValue, setInputMainScreenPageValue, textareaMainScreenPageValue, setTextareaMainScreenPageValue, setPostApi } = useContext(DataContext)

  useEffect(() => {
    if ((digitInput === true) && (digitTextarea === true)) {
      setStyleButton('new-style-button')

    } else {
      setStyleButton('style-button')
      
    }

  }, [digitInput, digitTextarea, setStyleButton])

  function clean() {
    setInputMainScreenPageValue('')
    setTextareaMainScreenPageValue('')

  }

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
        setStyleButton('style-button')

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
          <TextAreaDefault
            nameTextarea='content'
            id='content'
            valueTextarea={textareaMainScreenPageValue} 
            placeholder='Content here'
            rows='5'
          />
        </div>

        <div className='main-content-card-create-button'>
          <ButtonDefault 
            nameButton='Create' 
            type='submit'
          />
        </div>

      </form>

      <Cards />

    </div>
  )

}

export default Main;
