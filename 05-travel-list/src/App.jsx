import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pants", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function onAddItem(item) {
    item.id = items.length + 1;
    const newItems = [...items, item];
    setItems(newItems);
  }

  function handleDeleteItem(id) {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  function handleTogglePacked(id) {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.packed = !item.packed;
      }
      return item;
    })

    setItems(newItems);
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={onAddItem} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleTogglePacked={handleTogglePacked} handleClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

export default App
