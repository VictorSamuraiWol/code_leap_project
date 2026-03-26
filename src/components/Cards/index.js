import './style.css';
import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext';

function Cards() {

  const { userContent, setCaptureUserCard, user, userContentLikes, setPostApi, setPutApi } = useContext(DataContext)

  const [likes, setLikes] = useState([])

  useEffect(() => {
    // function that get all likes of the user
    function getAllLikes() {
      const matched = userContentLikes
        .filter(userContentLikes => userContentLikes.username.toLowerCase() === user.toLowerCase())[0]
  
      if (matched) {
        setLikes(matched.likes)
  
      }

    }

    getAllLikes()

  }, [user, userContentLikes])

  // function that capture Id and date of the users
  function setCaptureIdUserModal(user) {
    setCaptureUserCard(user)

  }

  // function that returns only the edited first name
  function firstNameUserSplitSlice(nameUser) {
    const firstName = nameUser && nameUser.trim().split(/\s+/)[0]

    let editFirstName;

    if (firstName?.length > 15) {
      editFirstName = firstName.slice(0, 15) + "..."
    } else {
      editFirstName = firstName

    }

    return editFirstName;

  }

  // function that verify id of the users to able the tools (edit and delete) in MenuTools
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

  // function that verify id of the users to able the tools (likes) in MenuTools
  function matchedUserAndContentUserLikes(id) {
    let ableLikeIcon;
    let ableUnlikeIcon;

    ableUnlikeIcon = true

    const matchedUserContentId = userContent
      .filter(userCard => userCard.username.toLowerCase() === user.toLowerCase())

    if (matchedUserContentId) {
      matchedUserContentId.forEach(user => {
        if (user.id === id) {
          ableUnlikeIcon = false
          ableLikeIcon = false

        }

      })

    }    

    const matched = userContentLikes
      .filter(userContentLikes => userContentLikes.username.toLowerCase() === user.toLowerCase())[0]

    if (matched) {
      const allLikes = matched.likes

      if (allLikes.length > 0) {
        allLikes.forEach(like => {
          if (like === id) {
            ableLikeIcon = true
            ableUnlikeIcon = false
  
          }
  
        })

      }

    } else if (!matched && user !== '' && !matchedUserContentId) {
      ableUnlikeIcon = true
      ableLikeIcon = false

    }

    return [ableLikeIcon, ableUnlikeIcon]

  }

  // Function that uses POST method to create users and likes in the API
  async function postUserLikes(newSetList) {
    let data = '';
    setPostApi(false);

      data = {
        username: user,
        likes: newSetList
      }

      try {
        const response = await fetch('http://localhost:3001/codeLeapNetworkLikes', { // json server
          method: 'POST',
          headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)                
        })

        if (response.ok) {
          console.log('Created!', data);
          setPostApi(true);

        }

      } catch(error) {
        console.error('Error while submitting data', error)

      } 

  }

  //Function that uses PUT method to update users and likes in the API
  async function putUserLikes(newSetList, id) {
    setPutApi(false);

    const jsonBody = JSON.stringify({
      username: user,
      likes: newSetList
    })

    await fetch(`http://localhost:3001/codeLeapNetworkLikes/${id}`, { // json server
      method: 'PUT',
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonBody

    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Updated!', data)
      setPutApi(true);

    }) 
    .catch((error) => {
        console.log(error)

    })

  }
  
  // function that add likes
  function getAddListLikes(id) {    
    const newLikeId = id
    
    const newList = [...likes, newLikeId]

    const newSet = new Set(newList)

    const newSetList = [...newSet]

    setLikes(newSetList)

    postOrPutUserLikes(newSetList)
    
  }

  // function that remove likes
  function getRemoveListLikes(id) {
    const newUnlikeId = id

    const matchedUserContentUnlikes = userContentLikes
      .filter(usernameLikesId => usernameLikesId.username.toLowerCase() === user.toLowerCase())[0]

    const newList = matchedUserContentUnlikes.likes
      .filter(like => like !== newUnlikeId)

    const newSet = new Set(newList)

    const newSetList = [...newSet]

    setLikes(newSetList)

    postOrPutUserLikes(newSetList)

  }

  function postOrPutUserLikes(newSetList) {
    const matchedUserContentLikes = userContentLikes
      .filter(usernameLikesId => usernameLikesId.username.toLowerCase() === user.toLowerCase())[0] 

    if (matchedUserContentLikes) {
      putUserLikes(newSetList, matchedUserContentLikes.id)

    } else {
      postUserLikes(newSetList)

    }

  }
 
  return (
    <div className='container'>
      {userContent !== undefined && userContent.length > 0 &&
      [...userContent]
        .sort((a, b) => b.created_datetime - a.created_datetime)
        .map((user) => (
          <Card
            key={user.id}
            onClick={() => setCaptureIdUserModal(user)}
            title={user.title}
            usernameFirstName={firstNameUserSplitSlice(user?.username)}
            date={user.created_datetime}
            content={user.content}
            ableEditTool={matchedUserAndContentUser(user.id)}
            ableDeleteTool={matchedUserAndContentUser(user.id)}
            ableLikeTool={matchedUserAndContentUserLikes(user.id)[0]}
            ableUnlikeTool={matchedUserAndContentUserLikes(user.id)[1]}
            getAddListLikes={() => getAddListLikes(user.id)}
            getRemoveListLikes={() => getRemoveListLikes(user.id)}
          />

        ))

      }

    </div>

  )

}

export default Cards;
