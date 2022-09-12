import React from 'react'
import './Backdrop.css'
import { AiOutlineSearch } from 'react-icons/ai'

import Video from '../../assets/Backdrop.mp4'

function Backdrop() {
    return (
        <div className='backdrop'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className='content'>
                <h1>Best Travel Destination</h1>
                <h2>Explore the World</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Explore Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Backdrop
