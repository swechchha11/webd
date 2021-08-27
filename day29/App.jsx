//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState,useEffect } from "react";

function App()
{

const [place,setPlace] = useState("");
const[placeData, setPlaceData] = useState(null);
const updatePlaceData = () => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=5581b9982a094234904110714212708&q=${place}`)
  .then((res) => res.json())
  .then((data) => {
    setPlaceData(data);
    console.log(data);
  });
};
return(

<div className="App">
  <div className="container">
    <div className="row">
      <div className="col-12 form">
        <input type="text"
        value={place}
        onChange={(e) => {
          setPlace(e.target.value);
               }}       />
        <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
      </div>
      <div className="offset-md-4 col-12 col-md-4 weather">
        <div className="card">
        {placeData.location ? (
          <div>
            <img src={placeData.current.condition.icon} alt=""/>
            <div className="place">{placeData.location.name}</div>
            <h1>{placeData.location.region}</h1>
            <h1>{placeData.location.country}</h1>
          </div>
        ) : (
          <h2>place not found</h2>
        )}

        </div>
      </div>
    </div>
  </div>
  
</div>
  );
}
export default App;