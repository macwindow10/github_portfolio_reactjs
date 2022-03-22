import React from 'react';

const List = ({ items }) => (
    <ul>
        {
            items.map(item => {
                return <li key={item.label}>
                    <strong>{item.label}</strong>{item.value}
                </li>
            })
        }
    </ul>
);
export default List;