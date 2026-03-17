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

  const { setActiveMainScreenModalEdit, setDigitInputMainScreenModalEdit, 
    setDigitTextareaMainScreenModalEdit, captureUserCard } = useContext(DataContext)

  const [newTitle, setNewTitle] = useState(captureUserCard?.title)
  const [newContent, setNewContent] = useState(captureUserCard?.content)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    setNewTitle(captureUserCard.title)
    setNewContent(captureUserCard.content)

  },[captureUserCard])

  function openModal(e) {
    setModalIsOpen(true)
    setActiveMainScreenModalEdit(true)

  }

  function closeModal() {
    setModalIsOpen(false)
    setActiveMainScreenModalEdit(false)

    setDigitInputMainScreenModalEdit(false)
    setDigitTextareaMainScreenModalEdit(false)

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
      console.log('Saved!', data)
      alert('Saved successfully!')

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
            required={true}
            setNewTitle={setNewTitle}
          />

          <FieldLabelTextareaModalEdit
            valueTextarea={newContent}
            required={true}
            setNewContent={setNewContent}
          />

          <div className='buttons'>
            <ButtonDefault 
              // onClick={audioClick.play()}
              onClick={closeModal}
              specificStyleButton='specificStyleButtonCancel'
              nameButton='Cancel' 
              type='button'              
            />

            <ButtonDefault
              // onClick={audioClick.play()}
              id='modalEditSaveButton'
              specificStyleButton='specificStyleButton'
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
