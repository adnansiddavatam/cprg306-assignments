"use client";
import Link from "next/link";

import React from "react";

import ItemList from "./item-list";

import NewItem from "./new-item";

import { getShoppingList } from "../_services/shopping-list-service";

import { addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";

import MealIdeas from "./meal-ideas";

import Item from "./item";

import { useState, useEffect } from "react";

export default function Home() {
  //Initialize a state variable (e.g., items) with the data from items.json.
  const [items, setItems] = useState(itemsData);

  //state for selected item name
  const [selectedItem, setSelectedItem] = useState("");

  //function to handle item select
  const handleSelectedItem = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleAddItem = async (item) => {
    // Call the addItem function to add the item to the shopping list
    const newItemId = await addItem(user.userId, item);

    // Set the ID of the new item
    item.id = newItemId;

    // Update the state to include the new item
    setItems([...items, item]);

    console.log(`Item added successfully with ID: ${newItemId}`);
  };

  //Async function loadItems
  const loadItems = async () => {
    // Call getShoppingList function with the user's uid as userId
    const shoppingList = await getShoppingList(user.uid);

    // Update the state with the result of getShoppingList
    setItems(shoppingList);
  };
  useEffect(() => {
    // Load items when the component is mounted
    loadItems();
  }, []); // Empty dependency array means it will only run once when the component mounts

  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        Shopping List
      </h1>
      <div className="flex flex-col items-center">
        <NewItem onAddItem={handleAddItem} />

        <ItemList onItemSelect={handleSelectedItem} itemsList={items} />

        <MealIdeas ingredient={selectedItem} />
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600 ">
        Back Home
      </Link>
    </main>
  );
}