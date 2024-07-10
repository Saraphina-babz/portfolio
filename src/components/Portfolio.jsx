import "../styles/portfolio.css";

import Ecomm from "../assets/Ecomm.png";
import interactive_comment from "../assets/interactive_comment.png";
import test from "../assets/test.jpg";
import dnd from "../assets/dnd.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="project">
      <h2 className="projectTitle">My Portfolio</h2>
      <span className="projectDesc">
        I take pride in paying attention to the smallest detail and making sure
        that my work is pixel
        
        perfect.<br/> I am enthusiastic about leveraging my skills and expertise to
         assist businesses in reaching their objectives and establishing a robust online presence
      
      </span>
      <div className="projectImg">
        <div className="ecomm">
        <img src={Ecomm} alt="image" className="projectImage" />
        <div className="ecommButton">
        <Link to="https://e-commerce-website-lyart.vercel.app/"><button>Demo</button></Link>
        <Link to="https://github.com/saraphina1/E-commerce-Website"><button>Code</button></Link></div>
        <p>Ecommerce Website <br/> HTML, CSS, REACT, VITE</p>
        
        </div>

        <div className="ecomm">
        <img src={interactive_comment} alt="image" className="projectImage" />
        <div className="ecommButton">
        <Link to="https://interactive-comment-sage.vercel.app/"><button>Demo</button></Link>
        <Link to="https://github.com/saraphina1/interactive-comment"><button>Code</button></Link></div>
        <p>Interactive Comment <br/> HTML, CSS, REACT</p>
        
        </div>
        
        <div className="ecomm">
        <img src={test} alt="image" className="projectImage" />
        <div className="ecommButton">
        <Link to="https://ada-software-engineering-program.github.io/startup-plan/"><button>Demo</button></Link>
        <Link to="https://github.com/ADA-Software-Engineering-Program/startup-plan"><button>Code</button></Link></div>
        <p>A StartUp Website <br/> HTML, CSS, TAILWIND, BOOTSTRAP & REACT</p>
        
        </div>

        <div className="ecomm">
        <img src={dnd} alt="image" className="projectImage" />
        <div className="ecommButton">
        <Link to="https://drag-n-drop-app2.vercel.app/"><button>Demo</button></Link>
        <Link to="https://github.com/saraphina1/drag-n-drop-app"><button>Code</button></Link></div>
        <p>Drag and Drop App <br/> HTML, CSS, BOOTSTRAP & REACT</p>
        
        </div>
        
      </div>
    </section>
  );
}

export default Portfolio;
