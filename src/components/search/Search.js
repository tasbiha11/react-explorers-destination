import React from 'react'
import './Search.css'

import gold from '../../assets/gold.png'
import house1 from '../../assets/house1.jpg'
import house2 from '../../assets/house2.jpg'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>Adventurous Homes with Thrilling Experiences</h2>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={house1} alt="/" style={{ width: '300px', height: '250px', marginRight: '1rem' }} />
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <img src={house2} alt="/" style={{ width: '300px', height: '250px', marginRight: '1rem' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">Subscribe to get</h4>
                        <p className="timer"></p>
                        <p className="offers">Notification!</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Enter your mail</label>
                            {/* <select>
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select> */}
                            <input type="text" placeholder='email' />
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Name</label>
                                <input type="text" placeholder='name' />
                            </div>
                            <div className="input-wrap">
                                <label>Mobile</label>
                                <input type="text" placeholder='mobile' />
                            </div>
                        </div>
                        <button>Subscribe ! </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search