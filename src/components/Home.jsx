import "../styles/home.css";
import foto from "../assets/foto.png";

import { Link } from "react-router-dom";

import { HiBriefcase } from "react-icons/hi";
function Home() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Welcome,</span>
        <span className="introText">
          I am <span className="introName">Bunmi</span>
          <br />
          Frontend Developer{" "}
        </span>
        <p className="intropara">
        I am driven by the art of creating dynamic and intuitive web interfaces<br/>
        By combining my design creativity with strong coding skills, I aim to <br/>
         deliver captivating digital experiences that engage users.<br/>
        Explore my portfolio to see how I combine creativity and <br/>functionality in my frontend development projects.
        </p>
        <Link to="/contact">
          <button className="hireBtn">
            <HiBriefcase className="briefImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={foto} alt="mypic" className="myPic" />
    </section>
  );
}

export default Home;
