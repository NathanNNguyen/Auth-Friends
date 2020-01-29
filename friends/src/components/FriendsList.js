import React, { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './styles.css';
import AddFriend from './AddFriend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`/api/friends`)
      .then(res => {
        // console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <AddFriend friends={friends} setFriends={setFriends}/>
      <div className='friends-list'>
        {friends.map(friend => {
          return (
            <div key={friend.id} className='friends-styling'>
              <h3>{friend.name}</h3>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FriendsList