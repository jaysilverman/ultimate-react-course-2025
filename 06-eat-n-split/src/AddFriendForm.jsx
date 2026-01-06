import { useState } from 'react';

export function AddFriendForm({ friends, setFriends, setShowForm }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('https://i.pravatar.cc/48');

  function handleAdd(name) {
    const maxId = friends.reduce((max, cur) => { return cur.id > max ? cur.id : max; }, 0);

    const friend = {
      'id': maxId + 1,
      'name': name,
      'image': `${imageUrl}?u=${maxId + 1}`,
      'balance': 0,
    };

    setFriends([...friends, friend]);

    setName('');
    setImageUrl('https://i.pravatar.cc/48');
    setShowForm(false);
  }

  return <>
    <form className='form-add-friend'>
      <label>👫 Friend name</label>
      <input onChange={(e) => setName(e.target.value)} value={name}></input>
      <label>🌄 Image URL</label>
      <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}></input>
      <button type='button' onClick={() => handleAdd(name)} className='button'>Add</button>
    </form>
    <button onClick={() => setShowForm(false)} className='button'>Close</button>
  </>;
}
