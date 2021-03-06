import * as actionTypes from './actionTypes';

export const loadCategories = (categories) => ({type: actionTypes.LOAD_CATEGORIES, payload: categories});
export const loadProducts = (products) => ({type: actionTypes.LOAD_PRODUCTS, payload: products});
export const chooseDelivery = () => ({type: actionTypes.CHOOSE_DELIVERY});
export const chooseTakeAway = () => ({type: actionTypes.CHOOSE_TAKEAWAY});