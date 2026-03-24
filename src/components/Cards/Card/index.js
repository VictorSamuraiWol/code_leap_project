import './style.css';
import MenuTools from '../../MenuTools';

function Card({ title, date, content, onClick, usernameFirstName, ableEditTool, ableDeleteTool}) {

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
    <div 
      className='card' 
      onClick={onClick}
    >
      <div className='card-title-edit-delete'>
        <h1>{title}</h1>
        <MenuTools 
          ableEditTool={ableEditTool} 
          ableDeleteTool={ableDeleteTool} 
        />

      </div>      

      <div className='card-user-date-content'>
        <div className='card-user-date-content-span-span'>
          <span className='card-user-date-content-span-span-username'>@{usernameFirstName}</span>
          <span className='card-user-date-content-span-span-date'>{getTimeAgo(date)}</span>

        </div>

        <div className='card-user-date-content-text'>
          {content}
        </div>

      </div>

    </div>
  )

}

export default Card;
