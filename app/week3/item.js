// create a functional component called Item. This should accept name, quantity, and category as props and display them in a list item element. Use tailwind classes for styling.

import React from "react";
export default function Item({name, quantity, category}) {
    return (
        <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
            <div className="flex-grow text-gray-800">
                <p className="font-bold text-lg">{name}</p>
                <p>{quantity} {category}</p>
            </div>
        </li>
    )
}