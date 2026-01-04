import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('');
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const averageTip = (Number(yourTip) + Number(friendTip)) / 2;
  const tip = Number(amount) * (averageTip / 100);
  const total = Number(amount) + tip;

  const handleReset = () => {
    setAmount('');
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <>
      <BillInput amount={amount} setAmount={setAmount}><span>How much was the bill?</span></BillInput>
      <TipInput tip={yourTip} setTip={setYourTip}>How did you like the service?</TipInput>
      <TipInput tip={friendTip} setTip={setFriendTip}>How did your friend like the service?</TipInput>
      { amount !== '' && <h3>You pay ${total} (${amount} + ${tip} tip)</h3> }
      { amount !== '' && <button onClick={() => handleReset()}>Reset</button> }
    </>
  )
}

function BillInput({children, amount, setAmount}) {
  return <div>
    {children}
    <input type="text" placeholder="Bill value" value={amount} onChange={a => setAmount(a.target.value)} />
  </div>
}

function TipInput({children, tip, setTip}) {
  const tipTypes = [
    { 'tip': '0', 'description': 'Dissatisfied (0%)'},
    { 'tip': '5', 'description': 'It was okay (5%)'},
    { 'tip': '10', 'description': 'It was good (10%)'},
    { 'tip': '20', 'description': 'Absolutely amazing! (20%)'},
  ]

  return <div>
    {children}
    <select value={tip} onChange={t => setTip(t.target.value)}>
      { tipTypes.map((tipType, i) => <option value={tipType.tip} key={i}>{tipType.description}</option>) }
    </select>
  </div>
}

export default App
