import "./about.scss";
import Me1 from "../../img/nice.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="card bg"></div>
        <div className="card">
          {/* <img src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="about-image" /> */}
          <img src={Me1} alt="" className="about-image" />
        </div>
      </div>
      <div className="right">
        <h1 className="title">About Me</h1>
        {/* <p className="sub">
          I am a self motivated influnza that can do alot of magic tricks and be
          readable.
        </p> */}
        <p className="desc">
          I'm a software/test automation engineer who is passionate about
          building software solutions. In my most recent role as a test
          automation engineer, I worked on developing and updating a custom
          keyword-driven automation framework with a backend written in Python(
          Flask ) and tests written in Java (Web, Android) and iOS automation
          written in Swift. My love for the web drove me to further upskill
          myself with the full-stack technologies of web development by
          completing courses in Java web development, React JS and Cloud
          Development through Udacity. I'd love to combine my passion for
          learning and problem-solving with my software development skills to
          build enterprise software solutions.
        </p>
        <div className="award">
          <a href="http://theroom.com/" target="_blank" rel="noreferrer">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQGBujtliTIDeA/company-logo_200_200/0/1659533043461?e=2147483647&v=beta&t=fk5Q4XFas2S_35SZySe02ZvkCtDpbfF-OE8Fs_15X_0"
              alt=""
            />
          </a>
          <div className="award-texts">
            <h4>The Room Fellow 2022</h4>
            <p>Apart of the Room fellowship program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
