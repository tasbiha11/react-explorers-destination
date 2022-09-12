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

        </div>
    )
}

export default Backdrop
