import React from 'react';

import './Toolbar.css';
// import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle  />
        <div className="Cart">Корзина</div>
        {/* <nav className="DesktopOnly">
            <NavigationItems />
        </nav> */}
    </header>
);

export default toolbar;