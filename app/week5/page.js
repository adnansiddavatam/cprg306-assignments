import React from "react";
import ItemList from "../week3/item-list";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Shopping List</h1>
            <ItemList />
            <Link href="./">Home</Link>
        </div>
    );
}
