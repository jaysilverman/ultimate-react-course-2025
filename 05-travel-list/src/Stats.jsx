export default function Stats({items}) {
  if (items.length === 0) {
    return <footer className="stats"><em>Start adding some items to your packing list 🚀</em></footer>
  }

  const numberPacked = items.reduce((acc, cur) => { return acc + (cur.packed ? 1 : 0 ) }, 0);
  const percentagePacked = Math.round(numberPacked / items.length * 100);

  const footer = percentagePacked !== 100 ? `🧳 You have ${items.length} items on your list, and you already packed ${numberPacked} (${percentagePacked}%)` : "You got everything! Ready to go ✈️";

  return <footer className="stats"><em>{footer}</em></footer>
}