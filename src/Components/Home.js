import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home-background'>
                <div className='col'>
                    <div className='home-head'>
                        Welcome to JobSearch
                    </div>
                    <div className='home-subhead'>
                        Your one stop for finding the best job openings worldwide!
                    </div>
                    <div className='buttons'>
                        <Link to='/tophirers' className='start-link'>See our top hierers!</Link>
                    </div>
                    <div className='buttons'>
                        <Link to='/categories' className='start-link'>Start Job Hunt</Link>
                    </div>
                </div>
                <div className='right-img'>
                </div>
                <div className='aboutus'>
                    <div className='about-head'>
                        About Us
                    </div>
                    <div className='about-content'>
                        At JobSearch, we believe that the right job can transform lives, and the right talent can transform businesses. Our mission is to connect job seekers with employers in a seamless, efficient, and user-friendly manner. Whether you're a recent graduate stepping into the professional world, a seasoned professional seeking new challenges, or an employer looking for the perfect candidate, JobSearch is here to facilitate the perfect match.
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
