import style from './style.css';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(); // Context

export default function DataProvider({ children }) { // Provider

  const [user, setUser] = useState('Victor')

  const [activeSignupPage, setActiveSignupPage] = useState(false)

  const [activeMainScreenPage, setActiveMainScreenPage] = useState(false)

  const [activeMainScreenModalEdit, setActiveMainScreenModalEdit] = useState(false)

  const [digitInputSignup, setDigitInputSignup] = useState(false)

  const [digitInputMainScreen, setDigitInputMainScreen] = useState(false)

  const [digitInputMainScreenModalEdit, setDigitInputMainScreenModalEdit] = useState(false)

  const [digitTextareaMainScreen, setDigitTextareaMainScreen] = useState(false)

  const [digitTextareaMainScreenModalEdit, setDigitTextareaMainScreenModalEdit] = useState(false)

  const [inputMainScreenPageValue, setInputMainScreenPageValue] = useState('')

  const [textareaMainScreenPageValue, setTextareaMainScreenPageValue] = useState('')

  const [userContent, setUserContent] = useState([])

  const [postApi, setPostApi] = useState(false)
  
  const [captureUserCard, setCaptureUserCard] = useState('')

  useEffect(() => {
    // Function that uses GET method to request users in the API
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/codeLeapNetwork")
        const data = await res.json() 
  
        if (!data) {
          throw new Error("Dados inválidos")
  
        } else {
          setUserContent(data)
  
        }
              
      } catch (error) {
          console.error(error)
  
      }
          
    }
    
    fetchData()

  }, [postApi])
      
  const value = {
    user,
    setUser,
    activeSignupPage,
    setActiveSignupPage,
    activeMainScreenPage,
    setActiveMainScreenPage,
    activeMainScreenModalEdit, 
    setActiveMainScreenModalEdit,
    digitInputSignup, 
    setDigitInputSignup,
    digitInputMainScreen,
    setDigitInputMainScreen,
    digitInputMainScreenModalEdit, 
    setDigitInputMainScreenModalEdit,
    digitTextareaMainScreen,
    setDigitTextareaMainScreen,
    digitTextareaMainScreenModalEdit, 
    setDigitTextareaMainScreenModalEdit,
    inputMainScreenPageValue,
    setInputMainScreenPageValue,
    textareaMainScreenPageValue,
    setTextareaMainScreenPageValue,
    userContent,
    setPostApi,
    captureUserCard, 
    setCaptureUserCard,

  }

  return (        
    <DataContext.Provider
        value={value}
    >
      {children}
    </DataContext.Provider> 

  )

}
