import React, { useEffect } from 'react';
import StoreItem from '../StoreItem';
import Cart from '../Cart'
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_SAUCES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_SAUCES } from '../../utils/queries';

function Store() {
    const [state, dispatch] = useStoreContext();

    const {currentCategory } = state;

    const { loading, data } = useQuery(QUERY_SAUCES);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_SAUCES,
                sauces: data.sauces,
            });
        }
    }, [data, loading, dispatch]);

    function filterSauces() {
        if (!currentCategory) {
            return state.sauces
        }
        return state.sauces.filter(
            (sauce) => sauce.category._id === currentCategory
        );
    }

    return (
        <div className='my-2'>
            <h2>Our Products:</h2>
            <Cart />
            {state.sauces.length ? (
                <div classname="flex-row">
                    {filterSauces().map((sauces) => (
                        <StoreItem
                        key={sauces._id}
                        _id={sauces._id}
                        image={sauces.image}
                        name={sauces.name}
                        price={sauces.price}
                        quantity={sauces.quantity}
                        />
                    ))}
                    </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
        </div>
    )
}

export default Store;