import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';
import ToolBar from './Toolbar/Toolbar';
import OrderBar from './Order/OrderBar';
import CategoriesBar from './CategoriesBar/CategoriesBar';
import ProductPreview from './ProductPreview/ProductPreview';
import './Page.css';

class Page extends Component {
    
    componentDidMount() {
        const { loadProducts } = this.props;
        axios.get(`http://localhost:3001/products`)
            .then((response) => loadProducts(response.data));
    }

    render () {
        const { products } = this.props;
        const { categories } = this.props;

        return (
            <div>
                <ToolBar />
                <OrderBar/>
                <CategoriesBar />
                <div>
                    {categories
                        .filter(category => category.products.length > 0)
                        .map((category, index) => 
                            <div className={`CategoryBlock ${(index%2===0 ? "Dark" : "Light")}`}>
                                <div className="CategoryName">{category.name}</div>
                                {products
                                    .filter(product => category.products.includes(product.id))
                                    .map(product => <ProductPreview key={product.id} {...product}/>)
                                }
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProducts: (products) => dispatch(actionCreators.loadProducts(products)),
        loadCategories: (categories) => dispatch(actionCreators.loadCategories(categories)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
