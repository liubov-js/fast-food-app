import * as actionTypes from './actionTypes';

const initialState = {
    categories: [],
    products: [],
    isDelivery: true,
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
        case actionTypes.CHOOSE_DELIVERY:
        return {
            ...state,
            isDelivery: true,
        }
        case actionTypes.CHOOSE_TAKEAWAY:
        return {
            ...state,
            isDelivery: false,
        }
    }
    return state;
}

export default reducer;
