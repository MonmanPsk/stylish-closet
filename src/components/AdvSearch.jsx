import React from 'react'
import '../assets/styles/advsearch.css'

import close_icon from '../assets/images/close_icon.png'
import adv_search_thumbnail from '../assets/images/adv_search_thumbnail.png'
import sex_icon from '../assets/images/sex_icon.png'
import skin_icon from '../assets/images/skin_icon.png'
import search_icon from '../assets/images/search_icon.png'

let debounce = false;

function close_adv_search(event) {
    if (event.target.className.includes("close_adv_search") == true && debounce == false) {
        const adv_search_screen = document.getElementsByClassName("adv_search_screen")[0];
        debounce = true;

        adv_search_screen.style.opacity = "0";
        adv_search_screen.style.animationPlayState = "running";
        setTimeout(function() {adv_search_screen.style.display = "none"; adv_search_screen.style.animation = "open_adv_search .5s"; debounce = false;}, 750);
    }
}

function AdvSearch() {
  return (
    <div className="adv_search_screen close_adv_search" onClick={e => close_adv_search(e)}>
        <div className="adv_search_popup">
            <img className="close_icon close_adv_search" src={close_icon} />

            <div className="adv_search_head">
                <img src={adv_search_thumbnail} alt="adv_search_thumbnail" />
            </div>

            <div className="adv_search_main">
                <form action="./search.html">
                    <ul>
                        <li className="adv_search_bar">
                            <input type="text" placeholder="Search" required />
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p>Weight*</p>
                            <input type="number" required />
                            <div></div>
                        </li>
                        <li>
                            <p>Height*</p>
                            <input type="number" required />
                            <div></div>
                        </li>
                        <li>
                            <p>Arm Circum</p>
                            <input type="number" />
                            <div></div>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p>Shoulder Width</p>
                            <input type="number" />
                            <div></div>
                        </li>
                        <li>
                            <p>Chest</p>
                            <input type="number" />
                            <div></div>
                        </li>
                        <li>
                            <p>Waistline</p>
                            <input type="number" />
                            <div></div>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p>Hip</p>
                            <input type="number" />
                            <div></div>
                        </li>
                        <li>
                            <p>Sleeve Length</p>
                            <input type="number" />
                            <div></div>
                        </li>
                        <li>
                            <p>Leg Length</p>
                            <input type="number" />
                            <div></div>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <img src={sex_icon} alt="sex" />
                            <select name="sex" id="sex_select" required>
                                <option value="" disabled selected hidden>Sex</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            <div></div>
                        </li>
                        <li>
                            <img src={skin_icon} alt="skin" />
                            <select name="skin" id="skin_select" required>
                                <option value="" disabled selected hidden>Skin</option>
                                <option value="">Light</option>
                                <option value="">Pinkish White</option>
                                <option value="">Yellowish White</option>
                                <option value="">Olive</option>
                                <option value="">Brown</option>
                                <option value="">Black</option>
                            </select>
                            <div></div>
                        </li>
                    </ul>

                    <input type="image" src={search_icon} alt="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdvSearch