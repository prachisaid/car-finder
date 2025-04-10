import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Wishlist from './Wishlist';
import Services from './Services';
import CarDetails from './CarDetails';

function App() {

    const [cars, setCars] = useState([]);

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        if (storedWishlist) setWishlist(storedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (car) => {
        const exists = wishlist.find(item => item.name === car.name && item.brand === car.brand);
        if (exists) {
            setWishlist(wishlist.filter(item => item !== exists));
        } else {
            setWishlist([...wishlist, car]);
        }
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/cars')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error('Error fetching cars:', err));
    }, []);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/wishlist' element={<Wishlist car={cars} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                <Route path='/services' element={<Services cars={cars} setCars={setCars} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                <Route path='/services/car/:id' element={<CarDetails cars={cars}/>}/>
            </Routes>
        </>
    );
}

export default App;
