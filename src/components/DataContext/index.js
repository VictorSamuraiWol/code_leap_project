import './style.css';
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

  const [userContentLikes, setUserContentLikes] = useState([])

  const [postApi, setPostApi] = useState(false)

  const [putApi, setPutApi] = useState(false)

  const [deleteApi, setDeleteApi] = useState(false)
  
  const [captureUserCard, setCaptureUserCard] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Functions that uses GET method to request users in the API
    async function fetchDataCodeLeapNetwork() {
      try {
        setLoading(true)
        const res = await fetch("http://localhost:3001/codeLeapNetwork") // json server
        // const res = await fetch("https://dev.codeleap.co.uk/careers/") // codeleap server
        const data = await res.json() 
  
        if (!data) {
          throw new Error("Dados inválidos")
  
        } else {
          setUserContent(data)
          setLoading(false)
  
        }
              
      } catch (error) {
          console.error(error)
  
      }
          
    }
    
    fetchDataCodeLeapNetwork()

    async function fetchDataCodeLeapNetworkLikes() {
      try {
        setLoading(true)
        const res = await fetch("http://localhost:3001/codeLeapNetworkLikes") // json server
        const data = await res.json() 
  
        if (!data) {
          throw new Error("Dados inválidos")
  
        } else {
          setUserContentLikes(data)
          setLoading(false)
  
        }
              
      } catch (error) {
          console.error(error)
  
      }
          
    }
    
    fetchDataCodeLeapNetworkLikes()

  }, [postApi, putApi, deleteApi])
      
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
    userContentLikes,
    setPostApi,
    setPutApi,
    setDeleteApi,
    captureUserCard, 
    setCaptureUserCard,
    loading,
    setLoading

  }

  return (        
    <DataContext.Provider
        value={value}
    >
      {children}
    </DataContext.Provider> 

  )

}
