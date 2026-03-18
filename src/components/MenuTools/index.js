import style from './style.css';
import ModalEditMenuTools from './ModalEditMenuTools';
import ModalDeleteMenuTools from './ModalDeleteMenuTools';

function MenuTools() {

  return (
    <div className='menutools'>
      <ModalDeleteMenuTools menutoolsIcons='menutools-icons' />
      <ModalEditMenuTools menutoolsIcons='menutools-icons' />

    </div>

  )

}

export default MenuTools;
