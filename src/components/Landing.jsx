import Particles from "./Particles";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Fragment>
        <div className="landing">
          <Particles id="tsparticles" />
          <div className="landing-content">
            <img src={require('../images/shiba.png')} />
            <h2>Where do keyboards go to have dinner? </h2>
            <p>The Space Bar.</p>
            <Link to="form">Let's Get your Tickets!</Link>
          </div>
        </div>
    </Fragment>
  );
}

export default Landing;
