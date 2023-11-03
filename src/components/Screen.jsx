import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/screen.css'

import stylish_closet_logo from '../assets/images/stylish_closet_logo.png'
import search_icon from '../assets/images/search_icon.png'
import announce_icon from '../assets/images/announce_icon.png'
import pic1 from '../assets/images/b4edidjhdst9.jpg'
import pic2 from '../assets/images/ht6i9ih26t4s.jpg'
import pic3 from '../assets/images/o1ugcvmro5k9.jpg'
import pic4 from '../assets/images/3c4b39f032f17d71564ff722974d4c83.jpg'
import pic5 from '../assets/images/q56vscvzsbda.jpg'
import pic6 from '../assets/images/7acef650ac5459eb801ecfa0f38187fd.jpg'
import pic7 from '../assets/images/mssz069_5.jpg'

let popup_screen = document.getElementsByClassName("popup_screen")[0];
let debounce = false;

function popup(event) {
    if (debounce == true) {
        return
    }

    debounce = true;

    popup_screen.style.opacity = 1;
    popup_screen.style.animation = "popup_screen_anim .5s";
    popup_screen.getElementsByClassName("popup_content")[0].style.animation = "popup_content_anim .5s";
    popup_screen.style.display = "flex";
    
    if (event.target.parentElement.tagName == "UL") {
        popup_screen.getElementsByTagName("img")[0].src = event.target.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.getElementsByTagName("p")[0].innerHTML;
    }
    else if (event.target.parentElement.tagName == "LI") {
        popup_screen.getElementsByTagName("img")[0].src = event.target.parentElement.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.parentElement.getElementsByTagName("p")[0].innerHTML;
    }
    else {
        popup_screen.getElementsByTagName("img")[0].src = event.target.parentElement.parentElement.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.parentElement.getElementsByTagName("p")[0].innerHTML;
    }
}

function close_popup(event) {
    if (event.target.className.includes("close_popup") == true && debounce == true) {
        debounce = false;
        
        popup_screen.style.animation = "close_popup_screen_anim .5s";
        popup_screen.getElementsByClassName("popup_content")[0].style.animation = "close_popup_content_anim .5s";
        popup_screen.style.opacity = 0;
        setTimeout(function() {popup_screen.style.display = "none";}, 500);
    }
}

function Screen() {
  return (
    <>
        <div className="popup_screen close_popup" onClick={e => close_popup(e)}>
            <div className="popup_content">
                <div className="close_btn close_popup"></div>
                <img src={pic4} alt="" />
                <div className="popup_description">
                    <p><b>monmanpsk</b>This is the style of dressing with a shirt suitable for city people.</p>
                </div>
            </div>
        </div>
        <div className="screen">
            <div className="leftscreen">
                <div className="logo">
                    <Link to="/"><img src={stylish_closet_logo} /></Link>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search" />
                    <button><img src={search_icon} /></button>
                </div>
            </div>

            <div className="rightscreen">
                <div className="announcement">
                    <img src={announce_icon} />
                    <p>...</p>
                </div>

                <div className="categories">
                    <ul>
                        <li>Shirt</li>
                        <li>Pants</li>
                        <li>Shoes</li>
                        <li>Suit</li>
                        <li>Swimming</li>
                    </ul>
                </div>

                <div className="container">
                    <div className="heading">
                        <p>For You</p>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                        <ul>
                            <li onClick={e => popup(e)}>
                                <img src={pic1} alt="style_picture" />
                                <div className="description">
                                    <p><b>monmanpsk</b>This is the style of dressing with a shirt suitable for city people.</p>
                                </div>
                            </li>
                            <li onClick={e => popup(e)}>
                                <img src={pic2} alt="style_picture" />
                                <div className="description">
                                    <p><b>_ppound</b>This is my favorite and coolest outfit.</p>
                                </div>
                            </li>
                            <li onClick={e => popup(e)}>
                                <img src={pic3} alt="style_picture" />
                                <div className="description">
                                    <p><b>konggy.y</b>Easy dressing style with my shorts.</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li onClick={e => popup(e)}>
                                <img src={pic4} alt="style_picture" />
                                <div className="description">
                                    <p><b>auejainoom</b>Chill.</p>
                                </div>
                            </li>
                            <li onClick={e => popup(e)}>
                                <img src={pic5} alt="style_picture" />
                                <div className="description">
                                    <p><b>stw_tm</b>Cool with plaid shirt.</p>
                                </div>
                            </li>
                            <li onClick={e => popup(e)}>
                                <img src={pic6} alt="style_picture" />
                                <div className="description">
                                    <p><b>perch_pb</b>When im coding.</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li onClick={e => popup(e)}>
                                <img src={pic7} alt="style_picture" />
                                <div className="description">
                                    <p><b>kongpoppppppppppppp</b>Dressing handsomely when going on a date with your girlfriend.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Screen