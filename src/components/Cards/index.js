import style from './style.css';
import Card from './Card';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

function Cards() {

  const { userContent, setCaptureUserCard, user } = useContext(DataContext)

  // function that capture Id and date of the users
  function setCaptureIdUserModal(user) {
    setCaptureUserCard(user)

  }

  // function that returns only the edited first name
  function firstNameUserSplitSlice(nameUser) {
    const firstName = nameUser.trim().split(/\s+/)[0]

    let editFirstName;

    if (firstName?.length > 15) {
      editFirstName = firstName.slice(0, 15) + "..."
    } else {
      editFirstName = firstName

    }

    return editFirstName;

  }

  // function that verify id of the users to able the tools in MenuTools
  function matchedUserAndContentUser(id) {
    let able;

    const matched = userContent
      .map(user => {
         const usernameId = {
          username: user.username, 
          userId: user.id

        }

        return usernameId

      })
      .filter(matched => matched.username.toLowerCase() === user.toLowerCase())
    
    if ((matched.length > 0) && (user !== "")) {
      const allMatchedId = matched
        .map(userRequest => userRequest.userId)

      allMatchedId.forEach(matchedId => {
        if (matchedId === id) {
          able = true

        }

      })

    } else {
      able = false

    }

    return able

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
            usernameFirstName={firstNameUserSplitSlice(user?.username)}
            date={user.date}
            content={user.content}
            ableEditTool={matchedUserAndContentUser(user.id)}
            ableDeleteTool={matchedUserAndContentUser(user.id)}
          />

        ))

      }

    </div>

  )

}

export default Cards;
