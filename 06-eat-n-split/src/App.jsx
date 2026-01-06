import { useState } from 'react';
import './App.css'
import { SplitBillForm } from './SplitBillForm';
import { AddFriendForm } from './AddFriendForm';
import { FriendsList } from './FriendsList';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selected, setSelected] = useState(0);
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);

  const currentFriend = friends.find(f => f.id === selected);

  function adjustBalance(adjustment) {

    const adjustedFriends = friends.map((friend) => {
      if (friend.id === selected) {
        friend.balance += adjustment;
      }

      return friend;
    })

    setFriends(adjustedFriends);
    setSelected(0);
  }

  return <div className='app'>
    <div className='sidebar'>
      <FriendsList friends={friends} selected={selected} setSelected={setSelected} />
      {showForm || <button onClick={() => setShowForm(!showForm)} className='button'>Add friend</button>}
      {showForm && <AddFriendForm friends={friends} setFriends={setFriends} setShowForm={setShowForm} />}
    </div>
    {selected !== 0 && <SplitBillForm friend={currentFriend} adjustBalance={adjustBalance} />}
  </div>
}

export default App
