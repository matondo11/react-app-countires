import Country from "../src/components/ui/Country"
import NavBar from "./components/layouts/NavBar";
import BarraBusca from "./components/layouts/BarraBusca";
import { MdOutlineDarkMode  } from "react-icons/md";
import { useEffect, useState } from "react"
import './App.css'


function App() {
  const [countries, setCountries] = useState([]);

  
  useEffect(() => {
    fetch("../public/data/data.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const countryToShow = countries.slice(0,4);

  return (
    <>
      <NavBar label="Country List" item="Dark Mode" icon={<MdOutlineDarkMode />} />

      <BarraBusca texto="Buscar país..."  />

      <div className="CountryList">
       {
         countryToShow.map(country => (
           <Country key={country.name} imgUrl={country.flags.svg} name={country.name} capital={country.capital} region={country.region} population={country.population} />
         ))
       }
      </div>
    </>
  )
}

export default App
