import './Hello.css';
import { ReactComponent as HelloSvg } from '../images/svg/hello.svg'

function Hello() {

  return (
    <div className='hello'>
      <HelloSvg />
    </div>
  );
}

export default Hello;
