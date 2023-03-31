import { useState } from 'react'

const defaultItems = [
    {
      id: 1,
      text: "Kupi mlijeko",
      done: false,
    },
    {
      id: 2,
      text: "Kupi brašno",
      done: true,
    },
];

function App() {
  const [items, setItems] = useState(defaultItems);

  const itemComponents = items.map(item => {
    return (
      <div key={item.id}>
        <input type="checkbox" checked={item.done} />
        {item.text}
      </div>
    );
  });

  return (
      <div>
        <h1>ToDo App</h1>
        {itemComponents}
      </div>
  )
}

export default App
