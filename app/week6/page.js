// ./app/week6/page.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData || []);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link href="./">Home</Link>
    </div>
  );
}
