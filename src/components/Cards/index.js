import style from './style.css';
import Card from './Card';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function Cards() {

  const { userContent, setCaptureUserCard } = useContext(DataContext)

  // function that capture Id and date of the users
  function setCaptureIdUserModal(user) {
    setCaptureUserCard(user)

  }

  return (
    <div className='container'>
      {[...userContent]
        .sort((a, b) => b.date - a.date)
        .map((user) => (
          <Card 
            key={user.id}
            onClick={() => setCaptureIdUserModal(user)}
            title={user.title} 
            username={user.username}
            date={user.date}
            content={user.content}
          />

        ))

      }

    </div>

  )

}

export default Cards;
