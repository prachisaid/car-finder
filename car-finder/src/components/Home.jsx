import React from 'react'
import home from '../images/hero-img.png';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='container'>
                <div className='data'>
                    <h1>Find your perfect car in seconds with,
                        <br/>
                        FirstRay
                    </h1>
                    <p>Precision Search. Perfect Match</p>
                    <button className='button'> <NavLink to='/services'>Get Started</NavLink> </button>
                </div>
                <img id='home-img' src={home} alt="" />
            </div>
        </>
    )
}

export default Home