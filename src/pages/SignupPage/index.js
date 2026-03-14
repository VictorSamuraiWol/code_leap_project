import style from './style.css';
import Signup from '../../components/Signup';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../components/DataContext';

function SignupPage() {
    
  const { setActiveSignupPage, setActiveMainScreenPage } = useContext(DataContext)

  useEffect(() => {
    setActiveSignupPage(true)
    setActiveMainScreenPage(false)

  }, [setActiveSignupPage, setActiveMainScreenPage])
 
  return ( 
    <Signup />

  )

}

export default SignupPage;
