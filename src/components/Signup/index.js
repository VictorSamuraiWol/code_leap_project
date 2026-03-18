import style from './style.css';
import InputDefault from '../InputDefault';
import LabelDefault from '../LabelDefault';
import ButtonDefault from '../ButtonDefault';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';

function Signup() {

  const { activeSignupPage, user, setUser } = useContext(DataContext)

  useEffect(() => {
    setUser('')

  }, [])

  // function that open the Main Screen Page 
  function openMainScreenPage() {
    let able;
    
    if ((activeSignupPage === true) && (user !== '')) {
      able = '/MainScreenPage'
      
    }
    
    return able

  }

  return (
    <div className='signup'>
      <div className='signup-div'>
        <h1>Welcome to CodeLeap Network!</h1>

        <div className='signup-div-label-input'>
          <LabelDefault forLabel='signup' nameLabel='Please enter your username'/>
          <InputDefault 
            id='signup'
            name='signup'
            placeholder='Victor Cardoso'
            type='text'
            valueInput={user}
          />

        </div>

        <div className={'signup-div-button'}>
          <Link to={openMainScreenPage()}>
            <ButtonDefault 
              id='signupButton'
              type='button' 
              nameButton='ENTER'
              specificStyleButton='specificStyleSignupButton'
            />

          </Link>

        </div>

      </div>

    </div>
  )

}

export default Signup;
