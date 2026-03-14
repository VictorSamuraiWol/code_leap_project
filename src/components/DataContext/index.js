import style from './style.css';
import { createContext, useContext, useEffect, useState } from 'react';

export const DataContext = createContext(); // Context

export default function DataProvider({ children }) { // Provider

  const [user, setUser] = useState('Victor')

  const [styleButton, setStyleButton] = useState('style-button')

  const [activeSignupPage, setActiveSignupPage] = useState(false)

  const [activeMainScreenPage, setActiveMainScreenPage] = useState(false)

  const [digitInput, setDigitInput] = useState(false)

  const [digitTextarea, setDigitTextarea] = useState(false)

  const [inputMainScreenPageValue, setInputMainScreenPageValue] = useState('')

  const [textareaMainScreenPageValue, setTextareaMainScreenPageValue] = useState('')

  const [userContent, setUserContent] = useState([])

  const [postApi, setPostApi] = useState(false)

  useEffect(() => {
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
    styleButton,
    setStyleButton,
    activeSignupPage,
    setActiveSignupPage,
    activeMainScreenPage,
    setActiveMainScreenPage,
    digitInput, 
    setDigitInput,
    digitTextarea,
    setDigitTextarea,
    inputMainScreenPageValue,
    setInputMainScreenPageValue,
    textareaMainScreenPageValue,
    setTextareaMainScreenPageValue,
    userContent,
    setPostApi

  }
console.log(userContent,68, 'ok', 'i')
  return (        
    <DataContext.Provider
        value={value}
    >
      {children}
    </DataContext.Provider> 

  )

}
