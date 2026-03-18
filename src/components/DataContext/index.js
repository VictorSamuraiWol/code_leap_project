import style from './style.css';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(); // Context

export default function DataProvider({ children }) { // Provider

  const [user, setUser] = useState('')

  const [activeSignupPage, setActiveSignupPage] = useState(false)

  const [activeMainScreenPage, setActiveMainScreenPage] = useState(false)

  const [activeMainScreenModalEdit, setActiveMainScreenModalEdit] = useState(false)

  const [activeMainScreenModalDelete, setActiveMainScreenModalDelete] = useState(false)

  const [inputMainScreenPageValue, setInputMainScreenPageValue] = useState('')

  const [textareaMainScreenPageValue, setTextareaMainScreenPageValue] = useState('')

  const [userContent, setUserContent] = useState([])

  const [postApi, setPostApi] = useState(false)

  const [deleteApi, setDeleteApi] = useState(false)
  
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

  }, [postApi, deleteApi])
      
  const value = {
    user,
    setUser,
    activeSignupPage,
    setActiveSignupPage,
    activeMainScreenPage,
    setActiveMainScreenPage,
    activeMainScreenModalEdit, 
    setActiveMainScreenModalEdit,
    activeMainScreenModalDelete, 
    setActiveMainScreenModalDelete,
    inputMainScreenPageValue,
    setInputMainScreenPageValue,
    textareaMainScreenPageValue,
    setTextareaMainScreenPageValue,
    userContent,
    setPostApi,
    setDeleteApi,
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
