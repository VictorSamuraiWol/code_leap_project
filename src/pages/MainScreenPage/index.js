import style from './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import PopupUserNotFound from '../../components/Popups/PopupUserNotFound';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../components/DataContext';

function MainScreenPage() {

  const { setActiveSignupPage, setActiveMainScreenPage, user } = useContext(DataContext)

  const [popupUserNotFoundOne, setPopupUserNotFoundOne] = useState(false)

  useEffect(() => {
    // function that checks if the user is logged in
    function userVerify() {
      if (user === '') {
        setPopupUserNotFoundOne(true)

      }

    }

    userVerify()

  }, [])

  useEffect(() => {
    setActiveMainScreenPage(true)
    setActiveSignupPage(false)

  }, [setActiveMainScreenPage, setActiveSignupPage])

  return (
    <div className='main-screen-page'>
      <div className='main-screen-page-header-main'>
        <Header />

        <Main />

        {/* PopupUserNotFound */}
        {popupUserNotFoundOne && <PopupUserNotFound
          close={setPopupUserNotFoundOne}
          text='"User not found. Your experience on this page may be limited. Please return to the login page and sign in for a better experience."' 
        />}

      </div>

    </div>

  )

}

export default MainScreenPage;
