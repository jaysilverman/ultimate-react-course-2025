import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return <div className="accordion"> { 
      faqs.map((faq, index) => (
        <AccordionItem key={index} id={index + 1} faq={faq} />
      ))
    }
  </div>;
}

function AccordionItem({id, faq}) {
  const [open, setOpen] = useState(false);

  return <div className={`item ${open && 'open' || ''}`}>
      <p className="number">{String(id).padStart(2, '0')}</p>
      <p className="title">{faq.title}</p>
      <p onClick={() => setOpen(!open)} className="icon">{open && '-' || '+'}</p>
      {open && <div className="content-box">{faq.text}</div>}
    </div>
}