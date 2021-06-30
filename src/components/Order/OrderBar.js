import React, { Component } from 'react';

import Button from './Button/Button';

class OrderBar extends Component {
    render () {
        return (
            <div>
                <div>Доставка г. Москва</div>
                <Button className="Active">Доставка</Button>
                <Button btnType="Passive">Самовывоз</Button>
            </div>
        );
    }
}

export default OrderBar;
