import style from './style.css';

function LabelDefault({ forLabel, nameLabel }) {

  return (
    <label htmlFor={forLabel}>{nameLabel}</label>
  )

}

export default LabelDefault;
