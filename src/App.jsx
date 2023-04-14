import "./App.css";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";

function App() {
  const randomLocation = getRandomLocation();
  const location = useFetch(
    `https://rickandmortyapi.com/api/location/${randomLocation}`
  );

  console.log(randomLocation);
  console.log(location);

  return (
    <div className="container">
      <header className="header">
        <img className="img__header" src="/images/headerIMG.jpg" alt="" />
      </header>
      {/* INPUT ANGEL */}
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
