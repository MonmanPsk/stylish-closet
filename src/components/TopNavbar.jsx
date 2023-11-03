import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/topbar.css'

import moon_icon from '../assets/images/moon_icon.png'

let theme = document.getElementsByClassName("theme")[0];

function theme_change() {
  // dark
  if (theme.innerHTML.includes("Dark") == true) {
      theme.innerHTML = '<img src="/src/assets/images/sun_icon.png">' + "Light";
      document.getElementsByClassName("topbar")[0].style.color = "#ffffff";
      document.body.style.background = "linear-gradient(180deg, #2f2f2f 0%, #1f1f1f 100%)";
      document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].src = "/src/assets/images/stylish_closet_logo_white.png";
      document.getElementsByClassName("categories")[0].style.color = "#2f2f2f";
      document.getElementsByClassName("heading")[0].style.color = "#ffffff";
      document.getElementsByClassName("heading")[0].getElementsByTagName("div")[0].style.backgroundColor = "#ffffff";
      document.getElementsByClassName("content")[0].style.backgroundColor = "#1f1f1f";
      document.getElementsByClassName("bottom_bar")[0].style.backgroundColor = "#1f1f1f";
      document.getElementsByClassName("searchbar")[0].getElementsByTagName("button")[0].style.backgroundColor = "#2f2f2f";

      document.querySelectorAll(".categories li").forEach(category => {
          category.style.backgroundColor = "#ffffff";
      });

      document.querySelectorAll(".container .content li").forEach(content => {
          content.style.backgroundColor = "#2f2f2f";
          content.style.color = "#ffffff"
      });
  }
  // light
  else {
      theme.innerHTML = '<img src="/src/assets/images/moon_icon.png">' + "Dark";
      document.getElementsByClassName("topbar")[0].style.color = "#1f1f1f";
      document.body.style.background = "linear-gradient(180deg, #ffffff 0%, #dee2e1 100%)";
      document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].src = "/src/assets/images/stylish_closet_logo.png";
      document.getElementsByClassName("categories")[0].style.color = "#ffffff";
      document.getElementsByClassName("heading")[0].style.color = "#2f2f2f";
      document.getElementsByClassName("heading")[0].getElementsByTagName("div")[0].style.backgroundColor = "#2f2f2f";
      document.getElementsByClassName("content")[0].style.backgroundColor = "#ffffff";
      document.getElementsByClassName("bottom_bar")[0].style.backgroundColor = "#ffffff";
      document.getElementsByClassName("searchbar")[0].getElementsByTagName("button")[0].style.backgroundColor = "#4a4a4a";

      document.querySelectorAll(".categories li").forEach(category => {
          category.style.backgroundColor = "#2f2f2f";
      });

      document.querySelectorAll(".container .content li").forEach(content => {
          content.style.backgroundColor = "#ffffff";
          content.style.color = "#2f2f2f"
      });
  }
}

function TopNavbar() {
  return (
    <div className="topnavbar">
        <ul className="left">
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
        <ul className="right">
            <li className="theme" onClick={theme_change}><img src={moon_icon} />Dark</li>
            <li className="language">Language</li>
            <li>
                <Link to="/signup">Sign up</Link> | <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default TopNavbar