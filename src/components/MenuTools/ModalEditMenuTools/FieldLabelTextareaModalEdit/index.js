import './style.css';
import LabelDefault from '../../../LabelDefault';
import TextAreaDefault from '../../../TextAreaDefault';

function FieldLabelTextareaModalEdit({ valueTextarea, required, setNewContent }) {

  return (
    <div className='fieldLabelTextareaModalEdit'>
      <LabelDefault nameLabel='Content' />
      <TextAreaDefault 
        placeholder='Content Here' 
        valueTextarea={valueTextarea}
        required={required}
        setNewContent={setNewContent} 
        rows='4'
      />

    </div>
  )

}

export default FieldLabelTextareaModalEdit;
