import style from './style.css';
import InputDefault from '../../../InputDefault';
import LabelDefault from '../../../LabelDefault';

function FieldLabelInputModalEdit({ valueInput, required, setNewTitle }) {

  return (
    <div className='fieldLabelInputModalEdit'>
      <LabelDefault nameLabel='Title' />
      <InputDefault 
        placeholder='Hello World'
        valueInput={valueInput} 
        required={required} 
        setNewTitle={setNewTitle}
      />

    </div>
    
  )

}

export default FieldLabelInputModalEdit;
