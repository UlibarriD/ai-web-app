import Particles from "./Particles";

function Result() {
  return (
    <div className="landing">
      <Particles id="tsparticles" />
      <div className="background landing-content">
        <div className="image-container">
          <img src={require("../images/id_shiba.png")} alt='shiba' />
          <div className="transported">
            <h4>Transported:</h4>
            <p>Muerto</p>
          </div>
        </div>
        <div className="passenger-data">
          <h2>Passenger:</h2>
          <p>Joe Caca</p>
            
          <div className="form-row">
            <div className="form-row-col">
              <h4>Homeplanet</h4>
              <p>Caca</p>
            </div>
            <div className="form-row-col">
              <h4>Cryosleep</h4>
              <p>Quizas</p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-col">
              <h4>Edad</h4>
              <p>5 anos</p>
            </div>
            <div className="form-row-col">
              <h4>VIP</h4>
              <p>Me la woa llevar a todas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
