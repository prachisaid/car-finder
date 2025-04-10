import React from "react";
import { useParams } from "react-router-dom";

function CarDetails({ cars }) {
    const { id } = useParams();
    const car = cars.find((c) => c.id === parseInt(id));

    if (!car) return <h2>Car Not Found</h2>;

    return (
        <div className="container car-details my-5 p-4 shadow rounded-4 bg-white">
            <h2 className="car-title mb-4 text-center">{car.name} <span className="text-muted fs-5">({car.model})</span></h2>

            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <img src={car.image} className="car-details-img img-fluid rounded" alt={car.name} />
                </div>

                <div className="col-md-7 mt-4 mt-md-0">
                    <div className="car-info">
                        <p>{car.desc}</p>
                        <p><span className="label">🚗 Brand:</span> {car.brand}</p>
                        <p><span className="label">⛽ Fuel Type:</span> {car.fuelType}</p>
                        <p><span className="label">⚙️ Engine:</span> {car.engine}</p>
                        <p><span className="label">👥 Seating:</span> {car.seatingCapacity} people</p>
                        <p><span className="label">📅 Year:</span> {car.year}</p>
                        <p><span className="label">💰 Price:</span> <span className="car-details-price">${car.price.toLocaleString()}</span></p>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default CarDetails