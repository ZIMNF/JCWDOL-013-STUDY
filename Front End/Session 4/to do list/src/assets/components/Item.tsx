import React from "react";

interface ItemProps {
  item: {
    id: number;
    name: string;
    checked: boolean;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>{item.name}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
