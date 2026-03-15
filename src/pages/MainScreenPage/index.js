import style from './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../components/DataContext';

function MainScreenPage() {

  const { setActiveSignupPage, setActiveMainScreenPage } = useContext(DataContext)

  useEffect(() => {
    setActiveMainScreenPage(true)
    setActiveSignupPage(false)

  }, [setActiveMainScreenPage, setActiveSignupPage])

  return (
    <div className='main-screen-page'>
      <Header />
      <Main />
    </div>

  )

}

export default MainScreenPage;
