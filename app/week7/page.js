"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';

export default function Page() {
  const [items, setItems] = useState(itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Grouping NewItem and ItemList components */}
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* Placing MealIdeas component on the other side */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <Link href="./">Home</Link>
    </div>
  );
}
