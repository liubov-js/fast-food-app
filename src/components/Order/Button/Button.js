import React from 'react';

import './Button.css';

const button = (props) => (
    <button {...props} >
            {props.children}
    </button>
);

export default button;