import { useState } from "react";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import GroceryList from "./assets/components/GroceryList";
import "./App.css";

interface GroceryItem {
  id: number;
  name: string;
  checked: boolean;
}

const groceryItems: GroceryItem[] = [
  {
    id: 1,
    name: "Makan",
    checked: true,
  },
  {
    id: 2,
    name: "Tidur",
    checked: false,
  },
  {
    id: 3,
    name: "Mandi",
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item: GroceryItem) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  return (
    <div className="app bg-slate-500 rounded-xl text-pink-400 px-2 ">
      <Header />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Form onAddItem={handleAddItem} />
    </div>
  );
}
