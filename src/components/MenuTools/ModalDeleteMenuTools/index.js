import style from './style.css'
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault';
import { useContext, useState } from 'react';
import { DataContext } from '../../DataContext';
import { AiOutlineDelete } from "react-icons/ai";

Modal.setAppElement('#root')

function ModalDeleteMenuTools({ menutoolsIcons }) {

  const { setActiveMainScreenModalDelete, captureUserCard, setDeleteApi } = useContext(DataContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
    setActiveMainScreenModalDelete(true)

  }

  function closeModal() {
    setModalIsOpen(false)
    setActiveMainScreenModalDelete(false)

  }

  //Function that uses DELETE method to delete users in the API
  async function onDeleteModal(e) {
    e?.preventDefault()

    const url = `http://localhost:3001/codeLeapNetwork/${captureUserCard.id}` // json server
    // const url = `https://dev.codeleap.co.uk/careers/${captureUserCard.id}` // codeleap server

    const options = {
        method: "DELETE",
    }

    setDeleteApi(false)

    await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting')

      } else {
        response.json()
        console.log('Deleted!')
        setDeleteApi(true)
        closeModal()

      }

    })
    .catch((error) => {
        console.error('Erro:', error)
    })

  }

  return (
    <div className='container'>
      <AiOutlineDelete
        onClick={openModal}
        className={menutoolsIcons} 
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalDeleteOverlay'
          className='modalDeleteContent'
      >
        <div className='modalDeleteContent-title'>
          <h1>Are you sure you want to delete this item?</h1>
        </div>

        <div className='deleteButtons'>
          <ButtonDefault
            onClick={closeModal}
            specificStyleButton='specificStyleModalDeleteCancelButton'
            nameButton='Cancel' 
            type='button'              
          />

          <ButtonDefault
            onClick={onDeleteModal}
            id='modalDeleteButton'
            specificStyleButton='specificStyleModalDeleteButton'
            nameButton='Delete' 
            type='button'
          />

        </div>
      
      </Modal>

    </div>

  )

}

export default ModalDeleteMenuTools;
