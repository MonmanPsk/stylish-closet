import React from 'react'
import '../assets/styles/sidebar.css'

import choose_dress from '../assets/images/choose_dress.png'
import choose_shirt from '../assets/images/choose_shirt.png'
import choose_skirt from '../assets/images/choose_skirt.png'
import choose_socks from '../assets/images/choose_socks.png'
import choose_trousers from '../assets/images/choose_trousers.png'

function Sidebar() {
  return (
    <div className="side_navbar">
        <div className="sidebar">
            <ul>
                <li>
                    <img src={choose_dress} />
                    <p>dress</p>
                </li>
                <li>
                    <img src={choose_shirt} />
                    <p>shirt</p>
                </li>
                <li>
                    <img src={choose_skirt} />
                    <p>skirt</p>
                </li>
                <li>
                    <img src={choose_socks} />
                    <p>socks</p>
                </li>
                <li>
                    <img src={choose_trousers} />
                    <p>trousers</p>
                </li>
            </ul>
        </div>
        <div className="sidetab">
            <div className="lines">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar