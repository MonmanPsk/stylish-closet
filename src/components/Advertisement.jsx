import React from 'react'
import '../assets/styles/advertisement.css'

import ads1 from '../assets/images/advertisements/ads1.jpg'
import ads2 from '../assets/images/advertisements/ads2.jpg'
import ads3 from '../assets/images/advertisements/ads3.jpg'
import ads4 from '../assets/images/advertisements/ads4.jfif'
import arrow from '../assets/images/arrow.png'

let ads_trans_percen = 15;

function previous_ads() {
    const advertisement = document.getElementsByClassName("advertisement")[0];

    if (ads_trans_percen < 15) {
        ads_trans_percen += 70
        advertisement.getElementsByClassName("ads_banners")[0].style.transform = "translateX(" + ads_trans_percen + "%)";
    }
}

function next_ads() {
    const advertisement = document.getElementsByClassName("advertisement")[0];

    if (ads_trans_percen > -195) {
        ads_trans_percen -= 70
        advertisement.getElementsByClassName("ads_banners")[0].style.transform = "translateX(" + ads_trans_percen + "%)";
    }
}

function Advertisement() {
  return (
    <div className="advertisement">
        <ul className="ads_banners">
            <li><img src={ads1} /></li>
            <li><img src={ads2} /></li>
            <li><img src={ads3} /></li>
            <li><img src={ads4} /></li>
        </ul>
        <button className="previous_btn" onClick={previous_ads}><img src={arrow} /></button>
        <button className="next_btn" onClick={next_ads}><img src={arrow} /></button>
    </div>
  )
}

export default Advertisement