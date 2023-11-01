import './Dp.css';
import myImage from "../images/my-picture.PNG";

function Dp() {
  return (
    <div className='dp-header'>
      <img className='my-image' src={myImage} alt="..."/>
    </div>
  );
}

export default Dp;