import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'

import moon_icon from '../assets/images/moon_icon.png'
import stylish_closet_logo from '../assets/images/stylish_closet_logo.png'
import search_icon from '../assets/images/search_icon.png'
import cart_icon from '../assets/images/cart_icon.png'

let debounce = false;

function open_adv_search() {
    if (debounce == true) {
        return
    }

    const adv_search_screen = document.getElementsByClassName("adv_search_screen")[0];
    debounce = true;

    adv_search_screen.style.opacity = "1";
    adv_search_screen.style.display = "flex";
    adv_search_screen.style.animationPlayState = "running";
    setTimeout(function() {adv_search_screen.style.animation = "close_adv_search .5s paused"; debounce = false;}, 750);
}

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
                    <div className="adv_search" onClick={open_adv_search}>
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