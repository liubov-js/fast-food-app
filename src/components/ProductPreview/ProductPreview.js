import React from 'react';

import './ProductPreview.css';

const productPreview = (props) => (
    <div className="ProductPreview">
        <img className="Image" src={props.img} alt={props.name} />
        <p className="Name">{props.name}</p>
        <p className="Price">{props.price}<span className="Rub">₽</span></p>
    </div>
);

export default productPreview;