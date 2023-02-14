// https://www.swapi.tech/api/people/1
import React from "react";
import {Header} from "./components/Header/Header";
import {ItemList} from "./components/ItemList/ItemList";
import {PersonDetails} from "./components/PersonDetails/PersonDetails";
import {RandomPlanet} from "./components/RandomPlanet/RandomPlanet";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RandomPlanet />
        <div className="row">
          <ItemList />
          <PersonDetails />
        </div>
      </div>
    </>
  );
}

export default App;


