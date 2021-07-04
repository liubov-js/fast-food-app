import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import './CategoriesBar.css';

class CategoriesBar extends Component {

    componentDidMount() {
        const { loadCategories } = this.props;
        axios.get('/categories')
            .then((response) => loadCategories(response.data));
    }

    render () {
        const { categories } = this.props;

        return (
            <div className="CategoriesBar">
                {categories.map(category => 
                    <a href={`#category${category.id}`} key={category.id} className="Category">
                        {category.name}
                    </a>
                )}
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar);
