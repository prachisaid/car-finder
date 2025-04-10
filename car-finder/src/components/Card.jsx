import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="card">
                

                    <img
                        src={props.apiData.image}
                        alt={`${props.apiData.brand} ${props.apiData.name}`}
                        className="card-img-top rounded-4"
                        style={{ height: '200px', width: '300px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-semibold">{props.apiData.brand} {props.apiData.name}</h5>
                        <div className="content">
                            <p className="card-text mr-auto"><strong>Price:</strong> ₹{props.apiData.price.toLocaleString()}</p>
                            <p className="card-text"><strong>Fuel Type:</strong> {props.apiData.fuelType}</p>
                            <p className="card-text"><strong>Seating:</strong> {props.apiData.seatingCapacity} persons</p>
                            <p className="card-text"><strong>Model:</strong> {props.apiData.model} ({props.apiData.year})</p>
                        </div>
                        <div className="buttons" style={{display: 'flex', justifyContent:'space-evenly'}} >
                            <button
                                className={`btn ${props.isWished ? 'btn-danger' : 'btn-outline-danger'} w-100`}
                                onClick={() => props.toggleWishlist(props.apiData)}
                            >
                                {props.isWished ? 'Remove from list' : 'Add to Wishlist 🤍'}
                            </button>
                            <NavLink className='learn-link' to={`car/${props.apiData.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
                                Learn More
                            </NavLink>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card