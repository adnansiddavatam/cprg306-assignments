import React, { useState, useEffect } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  if (!items || !Array.isArray(items)) {
    return <p>No items available</p>;
  }

  const handleSortByName = () => setSortBy("name");
  const handleSortByCategory = () => setSortBy("category");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <button
        onClick={handleSortByName}
        style={{
          backgroundColor: sortBy === "name" ? "lightblue" : "white",
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={handleSortByCategory}
        style={{
          backgroundColor: sortBy === "category" ? "lightblue" : "white",
        }}
      >
        Sort by Category
      </button>
      {sortedItems.map((item) => (
        <div onClick={() => onItemSelect(item)} key={item.id}> 
          <Item name={item.name} quantity={item.quantity} category={item.category} />
        </div>
      ))}
    </div>
  );
}