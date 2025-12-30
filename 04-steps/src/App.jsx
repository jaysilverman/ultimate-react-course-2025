import './App.css'
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  return <Steps step={step} setStep={setStep} />
}

function Steps({step, setStep}) {
  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

  return <div className='steps'>
    <Numbers step={step} messages={messages} />
    <Message step={step} message={messages[step - 1]} />
    <Buttons step={step} setStep={setStep} />
  </div>
}

function Numbers({step, messages}) {
  return <div className='numbers'>
      { messages.map((message, index) => <Step index={index + 1} step={step} />) }
  </div>
}

function Step ({index, step}) {
  return <div className={`${index <= step && 'active'} step-${index}`}>{index}</div>
}

function Message({step, message}) {
  return <p className='message'>Step {step}: {message}</p>
}

function Buttons({step, setStep}) {
  const previous = () => setStep(step > 1 ? step - 1 : step);
  const next = () => setStep(step < 3 ? step + 1 : step);
  return <div className='buttons'>
    <button className='previous' onClick={previous}>Previous</button>
    <button className='next' onClick={next}>Next</button>
  </div>
}

export default App
