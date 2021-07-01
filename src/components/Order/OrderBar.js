import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import Button from './Button/Button';
import './OrderBar.css';

class OrderBar extends Component {
    render() {
        const { isDelivery, chooseDelivery, chooseTakeAway } = this.props;

        return (
            <div>
                <Button className={`Button ${isDelivery ? "Active" : "Inactive"}`} onClick={chooseDelivery}>
                    Доставка
                </Button>
                <Button className={`Button ${!isDelivery ? "Active" : "Inactive"}`} onClick={chooseTakeAway}>
                    Самовывоз
                </Button>
                {
                    isDelivery ? 
                    <div>
                        <h1 className="Header">Доставка г. Москва</h1>
                        <p className="Address">Улица</p>
                        <input className="Input" placeholder="Остоженка"/>
                        <p className="Address">Дом</p>
                        <input className="Input" placeholder="Остоженка"/>
                    </div> : 
                    <h1 className="Header">Самовывоз</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDelivery: state.isDelivery,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chooseDelivery: () => dispatch(actionCreators.chooseDelivery()),
        chooseTakeAway: () => dispatch(actionCreators.chooseTakeAway()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBar);
