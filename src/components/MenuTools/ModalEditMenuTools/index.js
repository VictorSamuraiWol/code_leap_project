import style from './style.css'
import Modal from 'react-modal'
import FieldLabelInputModalEdit from './FieldLabelInputModalEdit';
import FieldLabelTextareaModalEdit from './FieldLabelTextareaModalEdit';
import ButtonDefault from '../../ButtonDefault';
import { useContext, useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { DataContext } from '../../DataContext';

Modal.setAppElement('#root')

function ModalEditMenuTools({ menutoolsIcons }) {

  const { setActiveMainScreenModalEdit, captureUserCard } = useContext(DataContext)

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
  async function onSaveModal() {

    const jsonBody = JSON.stringify({
      title: newTitle,
      content: newContent,
      date: Date.now()

    })
    await fetch(`http://localhost:3001/codeLeapNetwork/${captureUserCard.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Updated!', data)

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
          overlayClassName='modalOverlay'
          className='modalContent'
      >
        <div className='modalContent-title'>
          <h1>Edit item</h1>
        </div>

        <form
          onSubmit={onSaveModal}
          className='formModal'
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

          <div className='buttons'>
            <ButtonDefault 
              // onClick={audioClick.play()}
              onClick={closeModal}
              specificStyleButton='specificStyleModalEditCancelButton'
              nameButton='Cancel' 
              type='button'              
            />

            <ButtonDefault
              // onClick={audioClick.play()}
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
