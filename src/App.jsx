import { useState } from "react";
import "./App.css";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import Select from 'react-select'
import locationsAll from './Json/locationsAll.json'

function App() {
  const [inputValue, setinputValue] = useState(getRandomLocation())



  const location = useFetch(
    `https://rickandmortyapi.com/api/location/${inputValue}`
  );

  const inputSelect = []

  for (let i = 0; i < locationsAll.results.length; i++) {
    inputSelect.push({"value": locationsAll.results[i].value, "label": locationsAll.results[i].value + ". " + locationsAll.results[i].label})
  }
  

  const handlerLocation = e => {
    setinputValue(e.value)
  }

  return (
    <div className="container">

      <header className="header">
        <img className="img__header" src="/images/headerIMG.jpg" alt="" />
      </header>
      {/* INPUT ANGEL */}
      <Select className='select__input' onChange={handlerLocation} options={inputSelect} />
      {/* NEEL PANTALLA DE CARGA Y MENSAJE DE ERROR */}
      <div className="info">
        <LocationCard location={location} />
      </div>
      <div className="residents__cards">
        {location?.residents.map((url) => (
          <ResidentCard key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
