import React from "react";
import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
        <h1 className="text-3xl m-5">My Shopping List</h1>
        <ItemList />
        <Link href="./">Home</Link>
        </main>
    );
    }