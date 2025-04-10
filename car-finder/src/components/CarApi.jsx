import React from 'react';
import Cards from './Cards';

function CarApi({cars, setCars, wishlist, toggleWishlist}) {

    return (
        <>
            <Cards cars={cars} setCars={setCars} wishlist={wishlist} toggleWishlist={toggleWishlist} />
        </>
    )
}

export default CarApi