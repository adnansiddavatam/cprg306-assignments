import React from 'react';

export default function Item(props) {

        return (
                <li>
                        <p>Name: {props.name}</p>
                        <p>Quantity: {props.quantity}</p>
                        <p>Category: {props.category}</p>
                </li>
        );
}
