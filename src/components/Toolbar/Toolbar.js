import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import './Toolbar.css';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu() {
        this.setState({showMenu: true});
    }

    closeMenu() {
        this.setState({showMenu: false});
    }

    render() {
        const { categories } = this.props;

        return (
            <header className="Toolbar">
                <img className="Menu" src="/images/BurgerMenu.png" onClick={this.openMenu} />
                <img className="Logo" src="/images/logo.png"  />
                <div className="Cart">
                    <span className="TotalPrice">0₽</span><img className="CartIcon" src="/images/Basket.png" />
                </div>
                {this.state.showMenu ? <div className="Categories" onClick={this.closeMenu}>
                    <ul>
                        {categories.map(category => <li className="CategoryLink"><a className="CategoryForMobile" href={`#category${category.id}`}>{category.name}</a></li>)}
                    </ul>
                </div> : ''}
            </header>
        )
    }
} 

const mapStateToProps = state => {
    return {
        categories: state.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: (categories) => dispatch(actionCreators.loadCategories(categories)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
