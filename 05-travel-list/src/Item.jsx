export default function Item({item, handleDeleteItem, handleTogglePacked}) {
  return (
    <li>
      <input onChange={() => handleTogglePacked(item.id)} type="checkbox" checked={item.packed} />
      <span className={item.packed ? 'strike-through' : ''}>{item.quantity} {item.description}</span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  )
}