import "../styles/about.css";
import uiDesign from "../assets/uiDesign.jpg";
import webDesign from "../assets/webDesign.jpg";
import respDesign from "../assets/respDesign.jpg";

function About() {
  return (
    <section className="about">
      <span className="aboutTitle">What I do</span>
      <span className="aboutDesc">
        I am a skilled and passionate Frontend developer with experience in creating<br/>
        virtual appealing and user-friendly websites. Possessing a solid grasp of design principles and a meticulous attention to detail,
         I excel in HTML, CSS, Bootstrap, JavaScript, React.js, and API integration.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={webDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2 className="ww">Web/App Development</h2>
            <p>
              translating design mockups and wireframes into fully functional
              websites or applications,
              by writing clean, efficient, and maintainable code using
              HTML, CSS, JavaScript and React.JS
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={respDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Responsive Design</h2>
            <p>
              I ensure that websites and applications are responsive across
              different devices and screen sizes.<br/>By utilizing responsive design
              techniques, I make sure that the user experience remains
              consistent and optimal, regardless of the device being used.
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={uiDesign} alt="/" className="skillbarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>
              I collaborate closely with designers to ensure that the user
              interface (UI) is visually appealing, user-friendly, and aligned
              with the projects goals and target audience. <br/>I also leverage my
              knowledge of UI design principles to create intuitive and engaging
              experiences for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
