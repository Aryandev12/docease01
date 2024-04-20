import React, { useContext, useEffect, useState } from 'react'
import { CurrentUserContext } from '../context/userContext'

type Props = {}

const Dashboard = (props: Props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      setUsername(currentUser.name);
      setEmail(currentUser.email);

    }
   
  }, [currentUser]);

  

  return (
    <div>
        - Upon logging in, users are directed to their personalized dashboard.
- Display recent activities, such as uploaded documents, conversion history, and collaboration notifications.
  { <p>Welcome, {username}!</p>}
  { <p>Your email is: {email}</p>}
  
    </div>
  )
}

export default Dashboard;