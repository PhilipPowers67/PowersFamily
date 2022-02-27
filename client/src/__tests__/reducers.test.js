import { reducer } from '../utils/reducers';
import {
    UPDATE_SAUCES,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from '../utils/actions';

const initialState = {
    sauces: [],
    categories: [{ name: 'Sauce' }],
    currentCategory: '1',
    cart: [
        {
            _id: '1',
            name: 'Regular',
            purchaseQuantity: 1
        },
        {
            _id: '2',
            name: 'Spicy',
            purchaseQuantity: 2
        }
    ],
    cartOpen: false
}

test('UPDATE_SAUCES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_SAUCES,
        sauces: [{}, {}]
    });
    expect(newState.sauces.length).toBe(2);
    expect(initialState.sauces.length).toBe(0);
})

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});

test('ADD_TO_CART', () => {
    let newState = reducer(initialState, {
        type: ADD_TO_CART,
        sauce: {purchaseQuantity: 1}
    });
    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
});