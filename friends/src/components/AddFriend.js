import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend({ friends, setFriends }) {

  const [newFriend, setNewFriend] = useState(
    {
      name: '',
      age: '',
      email: ''
    })

  const addFriend = e => {
    e.preventDefault();
    setFriends([
      ...friends, newFriend
    ]);
    axiosWithAuth().post(`/api/friends`, newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={addFriend}>
      <input
        className='spaces'
        type='text'
        name='name'
        placeholder='Name'
        onChange={handleChange}
        value={newFriend.name}
      />
      <input className='spaces'
        type='number'
        name='age'
        placeholder='Age'
        onChange={handleChange}
        value={newFriend.age}
      />
      <input
        className='spaces'
        type='email'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={newFriend.email}
      />
      <button className='spaces' type='submit'>Add to the list</button>
    </form>
  )
}

export default AddFriend