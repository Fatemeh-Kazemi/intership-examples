"use client";
import { useState, useTransition } from "react";

const items = Array.from({ length: 20000 }, (_, index) => `Item ${index + 1}`);

const FilterListComponent = () => {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      setFilteredItems(
        items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Filter List</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="py-2 px-4 border border-gray-300 rounded mb-4 text-black"
          placeholder="Type to filter..."
        />
        {isPending && <p className="text-gray-500">Updating list...</p>}
        <ul className="list-disc">
          {filteredItems.map((item, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterListComponent;
