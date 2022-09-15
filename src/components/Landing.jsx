import Particles from "./Particles";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Fragment>
        <div className="landing">
          <Particles id="tsparticles" />
          <div className="landing-content">
            <div className='landing-shiba'>
              <img src={require('../images/shiba.png')} alt="shiba"/>
            </div>
            <div className='landing-info'>
              <div className="form-row">
                <h3>Welcome to the space trip to the new canine planet, where only the most handsome and intelligent humans can enter,</h3>
              </div>
              <h4>would you like to come? </h4>
              <Link to="form" className="main-button">Let's Get your Tickets!</Link>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default Landing;
