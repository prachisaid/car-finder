import React from 'react'
import Card from './Card';

function Wishlist(props) {
    if (props.wishlist.length === 0) {
        return <p style={{display:"flex", justifyContent:"center", fontSize:"18px"}}>Your wishlist is empty 😢</p>;
    }

    return (
        <div className="cards my-4">
                {props.wishlist.map((car, i) => (
                        <Card
                            apiData={car}
                            toggleWishlist={props.toggleWishlist}
                            isWished={true}
                        />
                ))}
        </div>
    );
}

export default Wishlist