import React from "react";
import CarApi from "./CarApi";

function Services({cars, setCars, wishlist, toggleWishlist}) {
    return (
        <>
            <div className="cards">
                <CarApi cars={cars} setCars={setCars} wishlist={wishlist} toggleWishlist={toggleWishlist} />
            </div>
        </>
    )
}

export default Services