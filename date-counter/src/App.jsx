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
      <Incrementer incrementType="Step" amount={step} setAmount={setStep} increment={1} />
      <Incrementer incrementType="Count" amount={count} setAmount={setCount} increment={step} />
      <DateValue days={count} />
    </>
  )
}

function Incrementer({incrementType, amount, setAmount, increment}) {
  const handleDecrementClick = () => { setAmount((a) => a - increment)}
  const handleIncrementClick = () => { setAmount((a) => a + increment)}

  return (
    <div className="center">
      <button onClick={handleDecrementClick} className="horizontal-margin" type="button">-</button>
      <span>{incrementType}: {amount}</span>
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

export default App
