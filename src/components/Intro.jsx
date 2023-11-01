import './Intro.css';
import Dp from './Dp';

function Intro() {
  return (
    <div className='vh-100 intro'>
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <Dp />
        </div>
        <div className="col-12 col-lg-8 mt-4">
          <h1>I'm Suthan S M</h1>
          <h5>Software Engineer / Traveler</h5>
          <div className='intro-text'>
            <p>
              A passionate software engineer and an enthusiastic traveler, an explorer trying to explore the unexplored both as a software engineer and a traveler. 
            </p><p>
              Born in Mysore to a family from a small village called Somahalli just 50kms away from the Bandipur tiger reserve national park in Chamarajanagar. I started my journey as a kid in the heritage city of India, Mysuru. There I finished my schooling and graduated with Bachelor of Engineering degree in the year of 2019. As a kid who was always interested and never missed a chance to play cricket, when I had to choose my major subject between biology and computer science for 11th and 12th, I was very clear that I did not want to take biology and go in the direction of medicine, so I took computer science and that has been the best decision I have made in my life. I found my passion in programming there and choose to do my graduation in Information Science & Engineering.
            </p><p>
              In 2019 I landed my first job with Infosys as a software engineer and just like any other fresher in Infosys I went through 4 months of training in the beautiful Mysore campus and finished my training in March 2020 just when the COVID-19 Pandemic hit the world which made all of us start working from home. During this time I stayed with my family in my village Somahalli until July 2022 when I got the opportunity to work on-site in Germany, Bonn.
            </p><p>
              So I traveled to Germany in July 2022 where I stayed until October 2023 during which I gained lots of exposure on the process of software development and its impact on a business. It also opened the opportunity to travel Europe and explore different cultures, food and landscapes in Europe. Traveling has been one of the biggest motivation and something which always gave me a revelation experience. Especially in Europe I had my first experiences as a solo traveller stepping foot in 8 countries in 1 year.
            </p>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default Intro;