import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [formState, setFormState] = useState({text: "",
});
const [sort, setSort] = useState("createdAtDesc");

const handleSortChange = (event) => {
  setSort(event.target.value);
}

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  const itemComponents = items
    .sort((a, b) => {
    if (sort === "createdAtAsc") {
      return a.createdAt - b.createdAt;
    }
    return b.createdAt - a.createdAt;
  })
    .map(item => {
    const handleChange = () => {
      console.log('Handle change for item', item);
      setItems(items.map(newItem => {
        if (newItem.id === item.id) {
          return { ...newItem, done: !item.done };
        }
        return newItem;
      }));
    };

const handleClick = () => {
  setItems(items.filter(newItem => {
    return newItem.id !==item.id;
  }));
};

    return (
      <div key={item.id}>
        <input type="checkbox" checked={item.done} onChange={handleChange}/>
        {item.text} ({new Date(item.createdAt).toUTCString()})
        <button onClick={handleClick}>X</button>
      </div>
    );
  });

const handleSubmit = (event) => {
  event.preventDefault();
  setItems([
    ...items,
    {
      id: Date.now(),
      text: formState.text,
      done: false,
      createdAt: Date.now(),
    },
  ]);
  setFormState({...formState, text: ''});
}


  return (
      <div>
        <h1>ToDo App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" onChange={handleChange} value={formState.text}></input>
          <button type="submit" onSubmit={()=> handleClickAdd()}>Add item</button>
        </form>
        <select onChange={handleSortChange} defaultValue={sort}>
          <option value="createdAtAsc">Created at (Ascending)</option>
          <option value="createdAtDesc">Created at (Descending)</option>
        </select>
        {itemComponents}
      </div>
  )
}

export default App
