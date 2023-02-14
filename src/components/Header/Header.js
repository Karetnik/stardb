import React from "react";
import './Header.css'

export const Header = () => {
  return (
    <nav className="header purple lighten-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">StarDB</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">People</a></li>
          <li><a href="badges.html">Planets</a></li>
          <li><a href="collapsible.html">Starships</a></li>
        </ul>
      </div>
    </nav>
  )
}
