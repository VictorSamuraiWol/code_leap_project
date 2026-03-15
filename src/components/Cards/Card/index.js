import style from './style.css';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function Card({ title, username, date, content }) {

  // function that calcule the time
  function getTimeAgo(timestamp) {
    const diff = Math.floor((Date.now() - timestamp) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (diff < 60) return "now";
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;

    return `${days} days ago`;

  }

  return (
    <div className='card'>
      <div className='card-title-edit-delete'>
        <h1>{title}</h1>
        <div className='card-title-edit-delete-icons'>
          <AiOutlineDelete className='card-title-edit-delete-icons-icon' />
          <FaRegEdit className='card-title-edit-delete-icons-icon' />
        </div>
      </div>      

      <div className='card-user-date-content'>
        <div className='card-user-date-content-span-span'>
          <span className='card-user-date-content-span-span-username'>@{username}</span>
          <span className='card-user-date-content-span-span-date'>{getTimeAgo(date)}</span>
        </div>

        <div className='card-user-date-content-p'>{content}</div>

      </div>

    </div>
  )

}

export default Card;
