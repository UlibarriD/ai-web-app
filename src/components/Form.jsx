import Particles from "./Particles";
import { FaWindowClose } from "react-icons/fa"
import { Link } from "react-router-dom";


function Form() {
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
        </div>

        <div className="form-content">
          
        </div>
      </form>
    </div>
  )
}

export default Form