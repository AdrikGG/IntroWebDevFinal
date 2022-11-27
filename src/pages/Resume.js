import './Resume.css';

const Resume = () => {
  return (
    <div>
      <div className="resume-content">
        <h1>Resume</h1>
        <div className="section">
          <h2 className="section-header">
            Software Engineering Knowledge and Skills
          </h2>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Experienced in object-oriented programming; developing, testing
                and debugging code; designing interfaces; and administering
                systems and networks.
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Experience in designing and writing software using agile
                methodology.
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Quickly learn and master new technologies; successful working in
                both team and self-directed settings.
              </p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Education</h2>
          <p className="resume-p">
            Portland Community College, Portland, Oregon
          </p>
          <div className="span-group">
            <span className="bold">Associate of General Studies, </span>
            <span>Transferred to PSU: January 2021</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Academic Honors: President’s List (7 terms), Dean’s List (1
                term)
              </p>
            </li>
          </ul>
          <p className="resume-p">
            Portland State University, Portland, Oregon
          </p>
          <div className="span-group">
            <span className="bold">
              Pursuing Bachelor of Science in Computer Science,
            </span>
            <span> Expected Graduation: March 2023</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Academic Honors: President’s List (3 terms), 4.0 PSU GPA, 3.89
                Cumulative GPA
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 300 Solo Project: </p>
              <ul className="resume-ul">
                <li className="resume-li">
                  <p className="list-text">
                    Project Scope: Worked solo to develop an instant messaging
                    application. The application supported features such as user
                    accounts and authentication, user created chat rooms (in
                    which other users could be invited, given privileges or
                    removed), direct messaging, friend lists, as well as other
                    smaller features.
                  </p>
                </li>
                <li className="resume-li">
                  <p className="list-text">
                    Tools: Visual Studio, JavaScript, CSS, MERN Stack (MongoDB,
                    Express.js, React.js, Node.js)
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <p className="resume-p">
            Relevant Courses Completed (not including the Capstone
            prerequisites):
          </p>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">CS 410P Code Revision & Review</p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                CS 486 Intro. to Database Management Systems
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">ECE 341 Intro. to Computer Hardware</p>
            </li>
            <li className="resume-li">
              <p className="list-text">CS 415P Parallel Programming</p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Work Experience</h2>
          <div className="span-group">
            <span className="bold">CS Tutor, </span>
            <span>September 2018 to Present</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Provide study help and guidance to students mostly in lower
                division computer science courses.
              </p>
            </li>
          </ul>
          <div className="span-group">
            <span className="bold">Home Restoration and Remodeling, </span>
            <span>September 2016 to Present</span>
          </div>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                Provide help to experts with moving materials, small scale
                demolition, framing, sheetrocking, etc. Work on detailing
                including painting, plastering, wood staining, caulking, and
                whatever else may be needed.
              </p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-header">Technology Summary</h2>
          <ul className="resume-ul">
            <li className="resume-li">
              <p className="list-text">
                High Intermediate Skill Level: C, C++, JavaScript, TypeScript,
                React.js, Linux, Windows
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Low Intermediate Skill Level: HTML, Java, CSS, Node.js, MongoDB
              </p>
            </li>
            <li className="resume-li">
              <p className="list-text">
                Basic Skill Level: Express.js, Angular.js, Chapel, Fortran, MPI,
                OpenMP
              </p>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Resume;
