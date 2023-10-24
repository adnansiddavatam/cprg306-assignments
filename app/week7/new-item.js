"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {  // Destructuring onAddItem prop
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const submitFunction = (event) => {
    event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);

    // Replacing alert functionality with onAddItem prop invocation
    onAddItem(item);
    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={submitFunction} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          min="1"
          max="99"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
