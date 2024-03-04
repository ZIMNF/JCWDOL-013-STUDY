import React, { useState } from "react";

interface FormProps {
  onAddItem: (newItem: { name: string; checked: boolean; id: number }) => void;
}

const Form: React.FC<FormProps> = ({ onAddItem }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add task..." value={name} onChange={(e) => setName(e.target.value)} className="bg-slate-600 hover:bg-slate-700 border-2 rounded-xl container mx-auto m-3 px-2" />
      <button type="submit" className="bg-slate-600 rounded-full border-2 w-20 hover:bg-slate-700 m-2 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default Form;
