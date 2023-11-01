import { useState, useEffect } from 'react';
import './ProfileLayout.css';
import Swe from './Swe';
import Traveling from './Traveling';
import Intro from './Intro';
import Hello from './Hello';
import linkedIn from '../images/svg/icons8-linkedin.svg'
import github from '../images/svg/icons8-github.svg'
import gmail from '../images/svg/icons8-gmail.svg'
import instagram from '../images/svg/icons8-instagram.svg'

function ProfileLayout() {

  const [showHelloComponent, setShowHelloComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloComponent(false);
    }, 800);

    return () => clearTimeout(timer);
    }, []);

  return (
    <div className='container-fluid'>
      {showHelloComponent && <Hello />}
      
      {
        !showHelloComponent && 
        <div>
          <div className='content'>
            <Intro />
            <Swe />
            <Traveling />
          </div>
          <div className='footer fixed-bottom'>
            <img className='icons' src={linkedIn} alt="LinkedIn" />
            <img className='icons' src={github} alt="GitHub" />
            <img className='icons' src={gmail} alt="GMail" />
            <img className='icons' src={instagram} alt="Instagram" />
          </div>
        </div>
      }
    </div>
  );
}

export default ProfileLayout;