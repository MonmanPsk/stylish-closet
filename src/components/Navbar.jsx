import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'

import moon_icon from '../assets/images/moon_icon.png'
import stylish_closet_logo from '../assets/images/stylish_closet_logo.png'
import search_icon from '../assets/images/search_icon.png'
import cart_icon from '../assets/images/cart_icon.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="topbar">
            <ul className="left">
                <li><Link to="/help">Help</Link></li>
            </ul>
            <ul className="right">
                <li><img src={moon_icon} />Dark</li>
                <li>Language</li>
                <li>
                    <Link to="/signup">Sign up</Link> | <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>

        <div className="bottombar">
            <ul>
                <li>
                    <Link to="/"><img className="logo" src={stylish_closet_logo} /></Link>
                </li>
                <li>
                    <Link className="community" to="/community">Community</Link>
                </li>
                <li>
                    <div className="searchbar">
                        <input type="text" placeholder="Search" />
                        <button>
                            <Link to="/search"><img src={search_icon} /></Link>
                        </button>
                    </div>
                    <div className="adv_search">
                        <p>Advanced Search</p>
                    </div>
                </li>
                <li>
                    <Link to="/cart"><img className="cart_icon" src={cart_icon} /></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar   