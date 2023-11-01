import './Swe.css';

function Swe() {
  return (
    <div className='vh-100 swe'>
        <h1 className='mb-5'>Being a Software Engineer...</h1>
          <div className='row'>
            <div className='col-12 col-lg-3 skills m-3'>
              <h5 className='heading-skills'>Skills</h5>
              <p className='skill'>
                Java 
              </p><p className='skill'>
                Spring & Springboot 
              </p><p className='skill'>
                REST & SOAP web services 
              </p><p className='skill'>
                Microservices 
              </p><p className='skill'>
                Hibernate, Spring Data JPA 
              </p><p className='skill'>
                OAUTH2, Spring Security 
              </p><p className='skill'>
                JUnit, Mockito, Cucumber 
              </p><p className='skill'>
                Postman, JMeter 
              </p><p className='skill'>
                CI/CD, GitLab, Jenkins 
              </p><p className='skill'>
                HTML, CSS, JavaScript 
              </p><p className='skill skill-last'>
                ReactJS 
              </p>
            </div>
            <div className='col-12 col-lg-8 experience m-3'>
              <h5 className='heading-experience'>Experience</h5>
              <div className='body-experience'>
                <p className='company'>
                  <b>Infosys - Germany/Bengaluru</b>
                </p>
                
                <p>
                  <b>System Engineer</b> (Nov 2019 - Dec 2021)
                  <br/>
                  Involved in planning, estimating, development, writing unit and integration test cases for various Java, Spring/Springboot projects.
                </p>
                
                <p>
                  <b>Senior System Engineer</b> (Jan 2022 - Dec 2022)
                  <br/>
                  Involved in planning, estimating, development, writing unit and integration test cases for various Java, Spring/Springboot and ASP.NET projects. Handled client interactions, training, mentoring and guiding the team on new projects.
                </p>
                
                <p>
                  <b>Technology Analyst</b> (Jan 2023 - Present)
                  <br/>
                  Handled client interaction, requirement gathering, planning, estimating, development, application releases, issue/bug resolution, team mentoring and supporting operations team for various Java, Python and ASP.NET projects.
                </p>
                
              </div>
            </div>
          </div>
    </div>
  );
}

export default Swe;