import { useState } from 'react';

export function SplitBillForm({ friend, adjustBalance }) {
  const [totalBill, setTotalBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const [payer, setPayer] = useState('you');

  const friendExpense = (totalBill !== '' && myExpense !== '') ? totalBill - myExpense : '';
  const adjustment = (payer === 'you') ? Number(friendExpense) : -Number(myExpense);

  function handleSplit() {
    adjustBalance(adjustment);
    setTotalBill('');
    setMyExpense('');
    setPayer('you');
  }

  return <form className='form-split-bill'>
    <h2>Split a bill with {friend.name}</h2>
    <label>💰 Bill value</label>
    <input value={totalBill} onChange={(e) => setTotalBill(e.target.value)}></input>
    <label>🧍‍♀️ Your expense</label>
    <input value={myExpense} onChange={(e) => setMyExpense(e.target.value)}></input>
    <label>👭 {friend.name}'s expense</label>
    <input value={friendExpense} disabled></input>
    <label>🤑 Who is paying the bill</label>
    <select value={payer} onChange={(e) => setPayer(e.target.value)}>
      <option value="you">You</option>
      <option value="friend">{friend.name}</option>
    </select>
    <button onClick={() => handleSplit()} type="button" className="button">Split bill</button>
  </form>;
}
