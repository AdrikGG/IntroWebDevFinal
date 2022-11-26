import './About.css';

const About = () => {
  return (
    <div className="about-content">
      <h1 className="about-header">About Adrik Gurganus</h1>
      <figure>
        <img
          src={require('../images/SwampManDrawing.png')}
          alt="Drawn profile of Adrik"
          width="605"
          height="709"
        />
        <figcaption>Digital self portrait</figcaption>
      </figure>
      <div>
        <h3 className="experience">Background and Experience</h3>
        <p className="paragraph">
          I am Adrik Gurganus (he / him). I'm a Computer Science undergrad in my
          second to last term at PSU. I'm a well rounded programmer with my
          strengths being algorithms and backend web development. I'm on GitHub,
          @AdrikGG, where I have a couple of projects from over the years. One
          of these projects is a fully functional instant messaging app that I
          solo developed with the MERN stack for CS 300 Elements of Software
          Engineering. The app allows users to add and remove friends, create
          and delete rooms, and instant message other users while storing chat
          history. It's relatively bare bones, but it was made in about two
          months, so I'm pretty proud of how much I was able to get done.
          Another project of mine is a geography quiz website that includes
          multiple custom quizzes / games (currently finishing development).
          It's a collaborative project that I've been working on with a couple
          classmates and is also being developed with the MERN stack. On top of
          that, I have been working on my capstone project since summer term
          began. It's a mobile focused app being developed mostly with react
          native, which has given me a chance to improve my frontend
          capabilities as well as get experience with mobile development and
          team workflows.
        </p>
        <p className="paragraph">
          I am a moderator for a Discord server designed to help PCC and PSU
          students study by connecting them with their classmates and others who
          have previously taken their classes. I help make changes to the server
          in response to updates, monitor chat rooms and communicate with
          members, moderate content, and issue warnings or bans when necessary.
          I also often set up and run game servers for friends using a Linux
          machine I built and customized.
        </p>
      </div>
      <div>
        <h3 className="hobbies">Hobbies</h3>
        <p className="paragraph">
          I like to listen to folk music from cultures and languages from all
          around the world. My favorites of what I have found as of yet have
          been throat singing from Central Asia (Mongolia, Tuva, Kazakhstan,
          etc.) from bands like Khusugtun, Huun-Huur-Tu, and Altai Kai, Latvian
          festival / holiday songs (mostly from Auļi), and some more modern
          Polish folk pop like Burza by Tulia. Due to my particular interest in
          throat singing, I decided to learn how to do it myself and I now
          practice regularly.
        </p>
        <p className="paragraph">
          Another of my hobbies is learning about cultures and languages. Since
          2014 I have been learning Spanish on and off. It's a skill that
          requires constant maintainance. At this time in my life, I can read
          Spanish decently well, but can't speak it as well as I used to. I have
          also dabbled in learning Dutch and French. At this point, my ambitions
          are to improve my Spanish and at some point learn Mongolian.
        </p>
        <p className="paragraph">
          However, my most nerdy passion is for geography, mostly in relation to
          political and demographic boundaries. I have memorized a great deal,
          including countries, their shapes, languages spoken within them, how
          their borders have changed throughout history, their significant
          placenames, and more. I've used this knowledge to draw many fictional
          maps of worlds of my own creation.
        </p>
        <p className="paragraph">
          I also enjoy playing video games with friends and am particularly fond
          strategy games.
        </p>
        <p className="paragraph">
          My last hobby worth note is drawing, most often digitally. I usually
          do portraits like the one of me above, though sometimes I draw
          landscapes as well.
        </p>
      </div>
    </div>
  );
};

export default About;
