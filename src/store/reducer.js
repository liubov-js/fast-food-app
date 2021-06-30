import * as actionTypes from './actionTypes';

const initialState = {
    categories: [],
    products: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CATEGORIES:
        return {
            ...state,
            categories: action.payload,
        }
        case actionTypes.LOAD_PRODUCTS:
        return {
            ...state,
            products: action.payload,
        }
    }
    return state;
}

export default reducer;
