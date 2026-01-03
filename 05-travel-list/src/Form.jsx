import { useState } from "react";

export default function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const quantityList = Array.from({length: 20}, (_, index) => index + 1);

  function handleSubmit(e) {
    const newItem = {description: description, quantity: quantity, packed: false };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);

    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {quantityList.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button disabled={description == ''}>Add</button>
    </form>
  )
}