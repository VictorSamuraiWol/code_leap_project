import './style.css';
import ModalEditMenuTools from './ModalEditMenuTools';
import ModalDeleteMenuTools from './ModalDeleteMenuTools';

function MenuTools({ ableEditTool, ableDeleteTool }) {

  return (
    <div className='menutools'>
      {ableDeleteTool && <ModalDeleteMenuTools menutoolsIcons='menutools-icons' />}
      {ableEditTool && <ModalEditMenuTools menutoolsIcons='menutools-icons' />}

    </div>

  )

}

export default MenuTools;
