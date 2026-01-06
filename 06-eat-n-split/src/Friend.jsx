import { FriendStatus } from './FriendStatus';

export function Friend({ friend, selected, setSelected }) {
  function toggleSelected() {
    if (selected === friend.id) {
      setSelected(0);
    }
    else {
      setSelected(friend.id);
    }
  }

  return <li className={`${selected === friend.id ? 'selected' : ''}`}>
    <img src={friend.image} alt={friend.name}></img>
    <h3>{friend.name}</h3>
    <FriendStatus friend={friend} />
    <button onClick={toggleSelected} className='button'>{selected === friend.id ? 'Close' : 'Select'}</button>
  </li>;
}
