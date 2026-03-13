import style from './style.css';
import { DataContext } from '../../components/DataContext';
import { useContext } from 'react';

function MainScreenPage() {

  const { user } = useContext(DataContext)

  console.log(user, 9)

  return (
    <div>
      <h1>Welcome {user}!</h1>
      Main Screen
    </div>
  )

}

export default MainScreenPage;
