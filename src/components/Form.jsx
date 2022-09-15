import Particles from "./Particles";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa"
import { Link } from "react-router-dom";


function Form() {
  const [passangerCount, setPassangerCount] = useState(0);

  return (
    <div className="bg-particles">
      <Particles id="tsparticles" />
      <form className="form-container">
        <Link to="/"><FaWindowClose /></Link>
        <div className="animation">
          <div className="moon">
            <div className="crater crater-1"></div>
            <div className="crater crater-2"></div>
            <div className="crater crater-3"></div>
            <div className="crater crater-4"></div>
            <div className="shadow"></div>
          </div>
          <div class="orbit">
            <div class="rocket">
                <div class="window"></div>
            </div>
          </div>
        </div>

        <div className="form-content">
          <div className="form-row">
            <h2>Get your Tickets</h2>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label for="passangerCount">Number of passengers you are traveling with:</label>
              <select name="passangerCount" id="passangerCount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label for="homePlanet">Home Planet:</label>
              <select name="homePlanet" id="homePlanet">
                <option value="1">Earth</option>
                <option value="2">Europa</option>
                <option value="3">Mars</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label for="passangerCount">Destination:</label>
              <select name="passangerCount" id="passangerCount">
                <option value="1">TRAPPIST-1e</option>
                <option value="2">55 Cancri e</option>
                <option value="3">PSO J318.5-22</option>
              </select>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Form