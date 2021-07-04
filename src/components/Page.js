/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';
import Toolbar from './Toolbar/Toolbar';
import OrderBar from './Order/OrderBar';
import CategoriesBar from './CategoriesBar/CategoriesBar';
import ProductPreview from './ProductPreview/ProductPreview';
import Footer from '../Footer/Footer';
import './Page.css';

class Page extends Component {
    
    componentDidMount() {
        const { loadProducts } = this.props;
        axios.get(`/products`)
            .then((response) => loadProducts(response.data));
    }

    render () {
        const { products, categories, isDelivery } = this.props;

        return (
            <div>
                <Toolbar />
                <OrderBar/>
                <CategoriesBar />
                <div>
                    {categories
                        .filter(category => category.products.length > 0)
                        .map((category, index) => 
                            <div
                                className={`CategoryBlock ${(index % 2 === 0 ? "Dark" : "Light")}`}
                                key={category.name}
                            >
                                <a name={`category${category.id}`} />
                                <div key={category.id} className="CategoryName">{category.name}</div>
                                {products
                                    .filter(product => 
                                        category.products.includes(product.id) && 
                                        (isDelivery ? product.delivery : true))
                                    .map(product => <ProductPreview key={product.id} {...product}/>)
                                }
                            </div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories,
        isDelivery: state.isDelivery,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProducts: (products) => dispatch(actionCreators.loadProducts(products)),
        loadCategories: (categories) => dispatch(actionCreators.loadCategories(categories)),
        chooseDelivery: () => dispatch(actionCreators.chooseDelivery()),
        chooseTakeAway: () => dispatch(actionCreators.chooseTakeAway()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
