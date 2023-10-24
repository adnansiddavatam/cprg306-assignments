import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}
