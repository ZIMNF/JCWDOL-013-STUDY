import React from "react";
import Item from "./Item";

interface GroceryListProps {
  items: { id: number; name: string; checked: boolean }[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const GroceryList: React.FC<GroceryListProps> = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <>
      <div className="text-left bg-slate-600 rounded-md p-2 mt-3">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default GroceryList;
