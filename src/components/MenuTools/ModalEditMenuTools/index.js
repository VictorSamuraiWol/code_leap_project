import './style.css'
import Modal from 'react-modal'
import FieldLabelInputModalEdit from './FieldLabelInputModalEdit';
import FieldLabelTextareaModalEdit from './FieldLabelTextareaModalEdit';
import ButtonDefault from '../../ButtonDefault';
import { useContext, useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { DataContext } from '../../DataContext';

Modal.setAppElement('#root')

function ModalEditMenuTools({ menutoolsIcons }) {

  const { setActiveMainScreenModalEdit, captureUserCard, user, setPutApi } = useContext(DataContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(captureUserCard?.title)
  const [newContent, setNewContent] = useState(captureUserCard?.content)
   
  useEffect(() => {
    setNewTitle(captureUserCard.title)
    setNewContent(captureUserCard.content)

  },[captureUserCard])

  function openModal() {
    setModalIsOpen(true)
    setActiveMainScreenModalEdit(true)
    setNewTitle(captureUserCard.title)
    setNewContent(captureUserCard.content)

  }

  function closeModal() {
    setModalIsOpen(false)
    setActiveMainScreenModalEdit(false)

  }

  //Function that uses PUT method to update users in the API
  async function onSaveModal(e) {
    e.preventDefault()
    setPutApi(false)

    const jsonBody = JSON.stringify({
      username: user,
      title: newTitle,
      content: newContent,
      created_datetime: Date.now()
    })

    await fetch(`http://localhost:3001/codeLeapNetwork/${captureUserCard.id}`, { // json server
    // await fetch(`https://dev.codeleap.co.uk/careers/${captureUserCard.id}`, { // codeleap server
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Updated!', data)
      setPutApi(true)
      closeModal()

    }) 
    .catch((error) => {
        console.log(error)

    })

  }

  return (
    <div className='container'>
      <FaRegEdit
        onClick={openModal}
        className={menutoolsIcons} 
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalEditOverlay'
          className='modalEditContent'
      >
        <div className='modalEditContent-title'>
          <h1>Edit item</h1>
        </div>

        <form
          onSubmit={onSaveModal}
          className='formEditModal'
        > 
          <FieldLabelInputModalEdit
            valueInput={newTitle}
            setNewTitle={setNewTitle}
            required={true}
          />

          <FieldLabelTextareaModalEdit
            valueTextarea={newContent}
            setNewContent={setNewContent}
            required={true}
          />

          <div className='editButtons'>
            <ButtonDefault
              onClick={closeModal}
              specificStyleButton='specificStyleModalEditCancelButton'
              nameButton='Cancel' 
              type='button'              
            />

            <ButtonDefault
              id='modalEditSaveButton'
              specificStyleButton='specificStyleModalEditSaveButton'
              nameButton='Save' 
              type='submit'
            />

          </div>
        
        </form>
      
      </Modal>

    </div>

  )

}

export default ModalEditMenuTools;
