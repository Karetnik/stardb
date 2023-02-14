import React from "react";
import './RandomPlanet.css'

export const RandomPlanet = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card purple lighten-2">
          <div className="card-content white-text row">
            <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="random-img col s4" alt=""/>              <h5>Person Name</h5>
            <ul className="collection purple col s8">
              <li className="collection-item purple lighten-2 white-text">
                <span>Gender</span>
                <span>male</span>
              </li>
              <li className="collection-item purple lighten-2 white-text">
                <span>Gender</span>
                <span>male</span>
              </li>
              <li className="collection-item purple lighten-2 white-text">
                <span>Gender</span>
                <span>male</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
