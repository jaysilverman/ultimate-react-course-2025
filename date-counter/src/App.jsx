import { useState } from "react";
import './App.css';

function App() {
  return <DateCounter />
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <Range amount={step} setAmount={setStep} />
      <Incrementer amount={count} setAmount={setCount} increment={step} />
      <DateValue days={Number(count)} />
      <Reset step={step} setStep={setStep} amount={count} setAmount={setCount}/>
    </>
  )
}

function Range({amount, setAmount}) {
  function handleChange(e) {
    setAmount(Number(e.target.value));
  }

  return (
    <div className="center">
      <input className="horizontal-margin" onChange={handleChange} type="range" min={1} max={20} value={amount} />
      <span>Step: {amount}</span>
    </div>
  )
}

function Incrementer({amount, setAmount, increment}) {
  const handleDecrementClick = () => { setAmount((a) => Number(a) - increment)}
  const handleIncrementClick = () => { setAmount((a) => Number(a) + increment)}

  function handleChange(e) {
    if (e.target.value !== "") {
      setAmount(e.target.value)
    }
  }

  return (
    <div className="center">
      <button onClick={handleDecrementClick} className="horizontal-margin" type="button">-</button>
      <input onChange={handleChange} type="text" value={amount} />
      <button onClick={handleIncrementClick} className="horizontal-margin" type="button">+</button>
    </div>
  )
}

function DateValue({days}) {
  const dateValue = new Date();
  dateValue.setDate(dateValue.getDate() + days);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="center top-margin">
      <h3 className="horizontal-margin">{days} days from today is {dateValue.toLocaleDateString("en-US", options)}</h3>
    </div>
  )
}

function Reset({step, setStep, amount, setAmount}) {
  function handleReset() {
    setStep(1);
    setAmount(0);
  }

  function hideReset() {
    return step == 1 && amount == 0;
  }

  return (
    <div className={`center ${hideReset() ? 'hide' : ''}`}>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
