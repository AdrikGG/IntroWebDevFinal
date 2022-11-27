import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-content">
      <h1 className="projects-header">Previous Projects</h1>
      <div className="project">
        <h2 className="project-header">Sendit</h2>
        <div className="description">
          <p>
            Sendit is an instant messaging app that I developed in the MERN
            stack when first learning JavaScript. The app uses authentication so
            that users can securely register an account and login. When in the
            app, users are able to create chat rooms, delete chat rooms, invite
            other users to their chat rooms and, of course, send messages. The
            messages are saved within the MongoDB database, providing a
            perminance to every chat room's message history. Due to the use of
            authentication, done with jsonwebtokens, users are only allowed to
            see and enter chat rooms that they've created or have been invited
            to. Similarly, they are allowed to access their own account
            information, but not any other user's. User accounts can be deleted
            and users can leave chat rooms.
          </p>
          <p>
            There is a lot about this project I would change or tweak if I were
            to comeback to it, and there is a lot that could be added as well. I
            showcase this project because it was my first big JavaScript project
            and one of the first times I used JavaScript in general. On top of
            that, I was only given about two months to research and develop the
            app. Considering all that, I'm very proud of the result.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, MERN stack (Mongodb, Express, React, Node), CSS.</p>
        </div>
        <div className="link">
          <span>Checkout the project's code on </span>
          <a href="https://github.com/AdrikGG/sendit">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">GeoQuiz</h2>
        <div className="description">
          <p>
            This project is a website that includes two geography quiz games.
            The first game shows players country silhouettes one at a time and
            has players guess the country by name. The second game shows players
            a world map while the game picks a random country in secret. The
            player's aim is to guess the secret country. Each wrong guess colors
            the guessed country based on its distance from the secret country on
            a gradient from blue (far) to red (near). When the secret country is
            guessed, all countries are colored in and the game ends. Users of
            the site also have the option of creating an account and logging in
            to keep track of their scores and get put on the leaderboard. Users
            are authenicated using jsonwebtokens, making sure they can only
            manipulate their own accounts.
          </p>
          <p>
            This has been a passion project that I have slowly been designing
            for about a year. I've made some prototypes prior to this website
            version, though nothing fully fleshed out until now. It was great to
            share this project and passion with the two classmates that
            developed this project with me, and it has been a good experience
            working with them.
          </p>
          <p>This project is currently a work in progress.</p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, MERN stack (Mongodb, Express, React, Node), CSS.</p>
        </div>
        <div className="link">
          <span>Checkout the project's code on </span>
          <a href="https://github.com/AdrikGG/FullStackFinal">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">Full Stack Homework</h2>
        <div className="description">
          <p>
            A collection of small JavaScript programs highlighting differnt
            aspects of JavaScript and Full Stack development.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>JavaScript, HTML, CSS, Bootstrap, Express, Pug.</p>
        </div>
        <div className="link">
          <span>Checkout the code on </span>
          <a href="https://github.com/AdrikGG/FullStackWebDev">GitHub!</a>
        </div>
      </div>
      <div className="project">
        <h2 className="project-header">Capstone Project</h2>
        <div className="description">
          <p>
            I, along with the seven others in my capstone team, worked to
            develop a mobile app that allows users to fill out a large form with
            personal medical information. The user can pick from a number of
            languages to translate the form into. The purpose of this app is to
            allow users to better communicate their medical history and
            situation when traveling and when dealing with medical profesionals
            who speak a different language. Users are able to create multiple of
            these forms as profiles and edit them whenever they like. All the
            data is stored locally to limit the vulnerability of users'
            sensitive medical data. Edits to profiles are saved as soon as they
            are made to make the process more user friendly.
          </p>
          <p>
            My work on this project was to handle much of the backend, the
            profile structure, and the storage, among a number of other things.
            I was also responsible for creating and testing the production
            builds. I was responsible for a very large portion of the app and
            it's code.
          </p>
          <h3 className="tech">Tech:</h3>
          <p>TypeScript, React Native, Expo.</p>
        </div>
        <div className="link">
          <p>
            Unfortunately, I am obligated to not share the code from this
            project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
