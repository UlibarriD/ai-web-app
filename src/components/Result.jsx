import Particles from "./Particles";

function Result(props) {
  return (
    <div className="landing">
      <Particles id="tsparticles" />
      <div className="background landing-content">
        <div className="image-container">
          <img src={require("../images/id_shiba.png")} alt='shiba' />
          <div className="transported">
            <h4>Transported:</h4>
            {props.res.Result === 1 && <p>Transported</p>}
            {props.res.Result === 0 && <p>Denied</p>}
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
        </div>
      </div>
    </div>
  );
}

export default Result;
