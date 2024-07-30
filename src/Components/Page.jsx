import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'
function Page() {
  const[city, setcity]=useState();
  const [citychosen, setcityChosen]=useState(false);
  const [cityName, setcityName]=useState({
    name:'',
    Temp:'',
    descrip:'',
  });

  const fetchData = async()=>{
 try {
   const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`8389b92d5ff6122791e38e5a5a842d39`}`)
   setcityName({
    name:city,
    Temp:result.data.main.temp,
    descrip:result.data.weather[0].description,
    coord:result.data.coord.lat,
    coord1:result.data.coord.lon,

   })
 } catch (error) {
    console.log("there is something error", error);
 }
 setcityChosen(true)
  }

  const handleSearch = ()=>{
    fetchData();
  }

  const handleChange = (e)=>{
  setcity(e.target.value)
  }
  return (
    <>
    <div className='background'>
      <div className="container">
        <h1>Weather App</h1>
        <div className="input">
          <input type='text' placeholder='Enter City' value={city} onChange={handleChange}/>
          <button onClick={handleSearch}>Search</button>
          {!citychosen? (<></>):(<>
          <div className='info'>
            <h3>{cityName.name}</h3>
            <h3>{cityName.Temp}</h3>
            <h3>lat:{cityName.coord}</h3>
            <h3>lon:{cityName.coord1}</h3>
            <h3>{cityName.descrip}</h3>
          </div>
          </>)
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Page;
