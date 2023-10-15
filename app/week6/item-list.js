import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  if (!items || !Array.isArray(items)) {
    return <p>No items available</p>;
  }

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
      {/* Mapping over sortedItems, not mutating the original items prop */}
      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
}
