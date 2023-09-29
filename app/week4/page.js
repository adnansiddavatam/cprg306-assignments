import React from 'react';
import NewItem from './new-item';
import Link from 'next/link';

export default function week4() {
    return (
        <main>
            <h1 className="text-3xl m-5">My Shopping List</h1>
            <NewItem/>
            <Link href="./">Home</Link>
        </main>
    );
}