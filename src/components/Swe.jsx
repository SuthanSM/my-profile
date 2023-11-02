import './Swe.css';

function Swe() {
  return (
    <div className='section swe'>
        <h1 className='mb-4'>Being a Software Engineer...</h1>
          <div className='row g-4'>
            <div className='col-12 col-lg-3'>
              <div className='career-card'>
                <h5 className='heading'>Skills</h5>
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
                </p><p className='skill'>
                  ReactJS 
                </p>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <div className='career-card'>
                <h5 className='heading'>Experience</h5>
                <div className='body-experience'>
                  <p className='company'>
                    <b>Infosys - Germany/Bengaluru</b>
                  </p>
                  
                  <p>
                    <b>System Engineer Trainee</b> (Nov 2019 - Mar 2021)
                    <br/>
                    Got trained in Python, RDBMS, Java, Spring/Springboot and AngularJS and developed an end to end fullstack application at the end of the training.
                  </p>

                  <p>
                    <b>System Engineer</b> (Apr 2021 - Dec 2021)
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
    </div>
  );
}

export default Swe;