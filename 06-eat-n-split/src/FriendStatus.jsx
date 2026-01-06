export function FriendStatus({ friend }) {
  if (friend.balance < 0) {
    return <p className='red'>You owe {friend.name} ${-friend.balance}</p>;
  }
  else if (friend.balance > 0) {
    return <p className='green'>{friend.name} owes you ${friend.balance}</p>;
  }
  else {
    return <p>You and {friend.name} are even</p>;
  }
}
