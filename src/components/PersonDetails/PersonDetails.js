import React from "react";
import './PersonDetails.css'

export const PersonDetails = () => {
  return (
      <div className="row col s8">
        <div className="col s11 right">
          <div className="card  purple lighten-2">
            <div className="card-content white-text row">
              <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="person-img col s5"/>
              <h5>Person Name</h5>
              <ul className="collection purple col s7">
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
