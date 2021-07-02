import React from 'react';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <img className="Menu" src="/images/BurgerMenu.png" clicked={props.menuClicked} />
        <img className="Logo" src="/images/logo.png"  />

        <div className="Cart">0₽<img className="CartIcon" src="/images/Basket.png" /></div>
    </header>
);

export default toolbar;