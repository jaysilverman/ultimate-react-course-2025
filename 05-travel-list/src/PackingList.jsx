import { useState } from "react";
import Item from "./Item";

export default function PackingList({items, handleDeleteItem, handleTogglePacked, handleClearList}) {
  const [sortType, setSortType] = useState('input');

  const sortedItems = sortItems(sortType);

  function sortItems(type) {
    let sortFunction;

    switch (type) {
      case "input":
        sortFunction = (a, b) => a.id - b.id;
        break;

      case "description":
        sortFunction = (a, b) => a.description.localeCompare(b.description);
        break;

      case "packed":
        sortFunction = (a, b) => {
          if (a.packed === b.packed) return 0;
          return a.packed ? 1 : -1;
        }
        break;
    }

    return [...items].sort(sortFunction);
  }

  return (
    <div className="list">
      <ul>
        { sortedItems.map(item => <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} handleTogglePacked={handleTogglePacked} />) }
      </ul>
      <div className='actions'>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={(handleClearList)}>Clear list</button>
      </div>
    </div>
  )
}