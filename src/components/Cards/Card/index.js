import style from './style.css';

function Card({ title, username, date, content }) {

  function getTimeAgo(timestamp) {
    const diff = Math.floor((Date.now() - timestamp) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (diff < 60) return "agora";
    if (minutes < 60) return `${minutes} min atrás`;
    if (hours < 24) return `${hours} h atrás`;

    return `${days} dias atrás`;

  }

  return (
    <div>
      <h1>{title}</h1>

      <div>
        <div>
          <span>@{username}</span>
          <span>{getTimeAgo(date)}</span>
        </div>

        <p>{content}</p>

      </div>

    </div>
  )

}

export default Card;
