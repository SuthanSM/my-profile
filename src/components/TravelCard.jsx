import './TravelCard.css';

function TravelCard(props) {
  return (
    <div className='travel-card'>
      <div className='card'>
        <div className='card-body'>
          <div className='div-image'>
            <img className='travel-image' src={props.traveledPlace.image} alt="..."/>
          </div>
          <div className='card-footer'>
            <h4>{props.traveledPlace.place}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;