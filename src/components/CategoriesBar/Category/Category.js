import React from 'react';

import './Category.css';

const category = (props) => (
    <button className="Category">
        {props.name}
    </button>
);

export default category;
