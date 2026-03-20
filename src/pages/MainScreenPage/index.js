import style from './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../components/DataContext';

function MainScreenPage() {

  const { setActiveSignupPage, setActiveMainScreenPage, user } = useContext(DataContext)

  useEffect(() => {
    // function that checks if the user is logged in
    function userVerify() {
      if (user === '') {
        alert('User not found. Your experience on this page may be limited. Please return to the login page and sign in for a better experience.')
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
      </div>
    </div>

  )

}

export default MainScreenPage;
