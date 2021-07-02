import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import Button from './Button/Button';
import './OrderBar.css';

class OrderBar extends Component {
    render() {
        const { isDelivery, chooseDelivery, chooseTakeAway } = this.props;

        return (
            <div className="OrderBar">
                <Button className={`Button ${!isDelivery ? "Active" : "Inactive"}`} onClick={chooseTakeAway}>
                    Самовывоз
                </Button>
                <Button className={`Button ${isDelivery ? "Active" : "Inactive"}`} onClick={chooseDelivery}>
                    Доставка
                </Button>
                {
                    isDelivery ? 
                    <div>
                        <div className="Header">Доставка г. Москва</div>
                        <div className="Address">
                            <p className="Street" >Улица</p>
                            <input className="Input" placeholder="Остоженка" title="Нужно заполнить для оформления доставки"/>
                            <p className="House">Дом</p>
                            <input className="Input" placeholder="Остоженка"/>
                        </div>
                    </div> : 
                    <div className="Header">Самовывоз</div>
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
