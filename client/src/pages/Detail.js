import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_SAUCES
} from '../utils/actions';
import { QUERY_SAUCES } from '../utils/queries';

function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentSauce, setCurrentSauce] = useState({});

    const { loading, data } = useQuery(QUERY_SAUCES);

    const { sauces, cart } = state;

    useEffect(() => {
        if (sauces.length) {
            setCurrentSauce(sauces.find((sauce) => sauce._id === id));
        }
        else if (data) {
            dispatch({
                type: UPDATE_SAUCES,
                sauces: data.sauces,
            });
        }
    }, [sauces, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                sauce: { ...currentSauce, purchaseQuantity: 1 },
            });
        }
    };
    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentSauce._id,
        });
    };

    return (
        <>
        {currentSauce && cart ? (
            <div className='container my-1'>
                <Link to="/">← Back to Products</Link>

                <h2>{currentSauce.name}</h2>

                <p>{currentSauce.description}</p>

                <p>
                    <strong>Price:</strong>${currentSauce.price}{' '}
                    <button onClick={addToCart}>Add to Cart</button>
                    <button
                        disabled={!cart.find((p) => p._id === currentSauce._id)}
                        onClick={removeFromCart}
                    >
                        Remove From Cart
                    </button>
                </p>
                <img 
                    src={`/images/${currentSauce.image}`}
                    alt={currentSauce.name}
                />
            </div>
        ) : null}
        <Cart />
        </>
    );
}

export default Detail;