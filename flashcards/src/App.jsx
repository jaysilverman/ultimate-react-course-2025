import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selected, setSelected] = useState(0);

  return <div className="flashcards">
    { questions.map(question => <FlashCard key={question.id} question={question} current={selected} setSelected={setSelected} />)}
  </div>;
}

function FlashCard({question, current, setSelected}) {
  function handleClick() {
    console.log(current, question.id);
    (current !== question.id) ? setSelected(question.id) : setSelected(0);
  }

  return <div onClick={handleClick} className={current === question.id ? 'selected' : ''}>
    <p>{current === question.id ? question.answer : question.question}</p>
  </div>
}