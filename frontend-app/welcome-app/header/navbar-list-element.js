import React from 'react';

const NavBarListElement = ({listElement}) => (
    <li className={listElement.isActive && "active"}>
        <a href={listElement.id}>{listElement.text}
        </a>
    </li>
);

export default NavBarListElement;