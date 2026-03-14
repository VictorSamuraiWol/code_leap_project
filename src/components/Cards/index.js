import style from './style.css';
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import Card from './Card';

function Cards() {

  const { userContent } = useContext(DataContext)



  return (
    <div className='container'>
      {[...userContent]
        .sort((a, b) => b.date - a.date)
        .map((user) => (
          <Card 
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
