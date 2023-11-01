import { useState, useEffect } from 'react';
import './Traveling.css';
import TravelCard from './TravelCard';
import Netherlands from "../images/netherlands.JPG";
import Swiss from "../images/swiss.JPG";
import Austria from "../images/austria.JPG";
import Germany from "../images/germany.HEIC";
import Luxemburg from "../images/luxemburg.JPG";
import Italy from "../images/italy.heic";
import Vatican from "../images/vatican.JPG";
import India from "../images/india.JPG";
import Liechtenstein from "../images/liechtenstein.JPG";

function Traveling() {

  const [traveledPlaces, setTraveledPlaces] = useState([]);

  useEffect(() => {
    setTraveledPlaces([
      {"image": Germany, "place": "Germany"}, 
      {"image": Italy, "place": "Italy"}, 
      {"image": Swiss, "place": "Switzerland"}, 
      {"image": Austria, "place": "Austria"},
      {"image": Netherlands, "place": "Netherlands"},
      {"image": Vatican, "place": "Vatican City"},
      {"image": Luxemburg, "place": "Luxemburg"},
      {"image": Liechtenstein, "place": "Liechtenstein"},
      {"image": India, "place": "India"}
    ]);
  }, [])

  return (
    <div className='vh-infinite traveling'>
        <h1 className='mb-5'>Being a Traveller...</h1>
        <p className='mb-5'>
          So I traveled to Germany in July 2022 where I stayed until October 2023 during which I gained lots of exposure on the process of software development and its impact on a business. It also opened the opportunity to travel Europe and explore different cultures, food and landscapes in Europe. Traveling has been one of the biggest motivation and something which always gave me a revelation experience. Especially in Europe I had my first experiences as a solo traveller stepping foot in 8 countries in 1 year.
        </p>
        <div className='travel-cards-grid'>
          {traveledPlaces.map(p => 
            <TravelCard traveledPlace={p} key={p.place}/>
          )}
        </div>
    </div>
  );
}

export default Traveling;