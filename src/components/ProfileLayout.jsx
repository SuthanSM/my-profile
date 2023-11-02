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

  const openSocialProfile = (url) => {
    window.open(url, '_blank');
  };

  const openGmail = () => {
    const email = 'suthantippu@gmail.com';
    const subject = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloComponent(false);
    }, 8000);

    return () => clearTimeout(timer);
    }, []);

  return (
    <div className='container-fluid'>
      {showHelloComponent && <Hello />}
      
      {
        !showHelloComponent && 
        <div>
          <div className='all-sections'>
            <Intro />
            <Swe />
            <Traveling />
          </div>
          <div className='footer fixed-bottom'>
            <img className='icons' src={linkedIn} alt="LinkedIn" onClick={() => openSocialProfile('https://www.linkedin.com/in/suthan-s-m-12494b150')} />
            <img className='icons' src={github} alt="GitHub" onClick={() => openSocialProfile('https://github.com/SuthanSM')} />
            <img className='icons' src={gmail} alt="GMail" onClick={openGmail} />
            <img className='icons' src={instagram} alt="Instagram" onClick={() => openSocialProfile('https://www.instagram.com/suthan.sm/')} />
          </div>
        </div>
      }
    </div>
  );
}

export default ProfileLayout;