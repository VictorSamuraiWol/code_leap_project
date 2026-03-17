import style from './style.css';
import ModalEditMenuTools from './ModalEditMenuTools';
import { AiOutlineDelete } from "react-icons/ai";

function MenuTools() {

  return (
    <div className='menutools'>
      <AiOutlineDelete className='menutools-icons' />
      <div>
        <ModalEditMenuTools menutoolsIcons='menutools-icons'  />        
      </div>

    </div>

  )

}

export default MenuTools;
