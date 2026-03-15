import style from './style.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';
import InputDefault from '../InputDefault';
import LabelDefault from '../LabelDefault';
import ButtonDefault from '../ButtonDefault';

function Signup() {

  const { styleButton, setStyleButton, setDigitInput } = useContext(DataContext) 

  // function that open the Main Screen Page 
  function openMainScreenPage() {
    let able;

    if (styleButton === 'new-style-button') {
      able = '/MainScreenPage'

    }

    return able

  }

  // function that active on click the button
  function clickButton() {
    setStyleButton('style-button')
    setDigitInput(false)

  }

  return (
    <div className='signup'>
      <div className='signup-div'>
        <h1>Welcome to CodeLeap Network!</h1>

        <div className='signup-div-label-input'>
          <LabelDefault forLabel='signup' nameLabel='Please enter your username'/>

          <InputDefault 
            placeholder='Victor Cardoso'
            id='signup'
            name='signup'
            type='text'  
          />

        </div>

        <div className={'signup-div-button'}>
          <Link to={openMainScreenPage()}>
            <ButtonDefault 
              onClick={clickButton}
              type='button' 
              nameButton='ENTER'
            />

          </Link>

        </div>

      </div>

    </div>
  )

}

export default Signup;
