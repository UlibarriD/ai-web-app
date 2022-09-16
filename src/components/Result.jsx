import Particles from "./Particles";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";


function Result(props) {
  return (
    <div className="landing">
      <Particles id="tsparticles" />
      <div className="background landing-content">
        <Link to="/">
          <FaWindowClose />
        </Link>
        <div className="image-container">
          <img src={require("../images/id_shiba.png")} alt='shiba' />
          <div className="transported">
            {props.res.Result === 1 && <h4 style = {{color: "green"}}>Transported</h4>}
            {props.res.Result === 0 && <h4 style = {{color: "red"}}>Denied</h4>}
          </div>
        </div>
        <div className="passenger-data">
          <h2>Passenger:</h2>
          <p>{props.res.Name}</p>
            
          <div className="form-row">
            <div className="form-row-col">
              <h4>Homeplanet</h4>
              <p>{props.res.HomePlanet}</p>
            </div>
            <div className="form-row-col">
              <h4>Cryosleep</h4>
              {props.res.CryoSleep && <p>Yes</p>}
              {props.res.CryoSleep === false && <p>No</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-col">
              <h4>Edad</h4>
              <p>{props.res.Age}</p>
            </div>
            <div className="form-row-col">
              <h4>VIP</h4>
              {props.res.VIP && <p>Yes</p>}
              {props.res.VIP === false && <p>No</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-col">
              <h4>Destination</h4>
              <p>{props.res.Destination}</p>
            </div>
            <div className="form-row-col">
              <h4>Cabin</h4>
              <p>{props.res.Cabin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
