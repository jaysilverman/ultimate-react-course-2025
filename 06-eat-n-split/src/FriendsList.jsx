import { Friend } from './Friend';

export function FriendsList({ friends, selected, setSelected }) {
  return <ul>
    {friends.map(friend => <Friend key={friend.id} friend={friend} selected={selected} setSelected={setSelected} />)}
  </ul>;
}
