import './style.css';
import ModalEditMenuTools from './ModalEditMenuTools';
import ModalDeleteMenuTools from './ModalDeleteMenuTools';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function MenuTools({ ableEditTool, ableDeleteTool, ableLikeTool, ableUnlikeTool, getAddListLikes, 
  getRemoveListLikes
 }) {

  const { user } = useContext(DataContext)

  return (
    <div className='menutools'>
      {ableDeleteTool && <ModalDeleteMenuTools menutoolsIcons='menutools-icons' />}
      {ableEditTool && <ModalEditMenuTools menutoolsIcons='menutools-icons' />}

      {ableLikeTool && !ableUnlikeTool && user !== "" &&
        <AiFillLike
          onClick={getRemoveListLikes} 
          className='menutools-icons menutools-icons-position-likes' 
        />
      }
      
      {ableUnlikeTool && !ableLikeTool && user !== "" &&
        <AiOutlineLike 
          onClick={getAddListLikes} 
          className='menutools-icons menutools-icons-position-likes' 
        />
      }

    </div>

  )

}

export default MenuTools;
