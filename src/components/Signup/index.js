import style from './style.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

function Signup() {

  const [styleButton, setStyleButton] = useState('signup-button')

  const { setUser } = useContext(DataContext) 

  // function that verify the change input
  function onChangeName(e) {
    if (e.target.value !== '') {
      setStyleButton('new-signup-button')
      setUser(e.target.value)

    } else {
      setStyleButton('signup-button')

    }

  }

  // function that open the Main Screen Page 
  function openMainScreenPage() {
    let able;

    if (styleButton === 'new-signup-button') {
      able = '/MainScreenPage'

    }

    return able

  }

  return (
    <div className='signup'>
      <div className='signup-div'>
        <h1>Welcome to CodeLeap Network!</h1>

        <div className='signup-div-p-input'>
          <p>Please enter your username</p>
          <input
            onChange={onChangeName}
            placeholder='Victor Cardoso' 
          />
        </div>

        <div className={'signup-div-button'}>
          <Link to={openMainScreenPage()}>
            <button 
              className={styleButton}>
                ENTER
            </button>
          </Link>
        </div>

      </div>

    </div>
  )

}

export default Signup;
