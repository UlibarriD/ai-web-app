import Particles from "./Particles";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

function Form() {
  const [passangerCount, setPassangerCount] = useState("1");
  const [homePlanet, setHomePlanet] = useState("Earth");
  const [destination, setDestination] = useState("TRAPPIST-1e");
  const [cryoSleep, setCryoSleep] = useState("True");
  const [name, setName] = useState("Bob Esponja");
  const [vip, setVip] = useState("True");
  const [age, setAge] = useState("1");
  const [roomService, setRoomService] = useState("1");
  const [foodcourt, setFoodCourt] = useState("1");
  const [shopping, setShopping] = useState("1");
  const [spa, setSpa] = useState("1");
  const [vrDeck, setVrDeck] = useState("1");
  const [cabin, setCabin] = useState("A");
  const [cabinNumber, setCabinNumber] = useState("1");
  const [seatPlace, setSeatPlace] = useState("P");

  const [passengers, setPassengers] = useState([]);
  const [stage, setStage] = useState(0);

  const nextStage = async (event) => {
    event.preventDefault();
    if (stage > 0) {
      const newData = {
        PassengerId: `${Math.round(
          Math.random() * (9999 - 9000) + 9000
        )}_${stage}`,
        HomePlanet: homePlanet,
        CryoSleep: cryoSleep,
        Cabin: `${cabin}/${cabinNumber}/${seatPlace}`,
        Destination: destination,
        Age: age,
        VIP: vip,
        RoomService: roomService,
        FoodCourt: foodcourt,
        Shopping: shopping,
        Spa: spa,
        VRDeck: vrDeck,
        Name: name,
      };
      const dataJson = await JSON.stringify(newData);
      const newList = passengers.concat(dataJson);
      setPassengers(newList);
    }
    setStage(stage + 1);
  };

  const sendData = async (event) => {
    event.preventDefault();
    const sendData = {
      Passengers: passengers,
    };

    const message = await fetch("http://34.201.107.64:8080/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    const jsonMessage = message.json();
    console.log(jsonMessage);
    console.log(sendData.Passengers);
  };

  const prevStage = (event) => {
    event.preventDefault();
    setStage(stage - 1);
  };

  return (
    <div className="bg-particles">
      <Particles id="tsparticles" />
      <form className="form-container">
        <Link to="/">
          <FaWindowClose />
        </Link>
        <div className="animation">
          <div className="moon">
            <div className="crater crater-1"></div>
            <div className="crater crater-2"></div>
            <div className="crater crater-3"></div>
            <div className="crater crater-4"></div>
            <div className="shadow"></div>
          </div>
          <div className="orbit">
            <div className="rocket">
              <div className="window"></div>
            </div>
          </div>
        </div>

        {stage < 1 && (
          <div className="form-content">
            <div className="form-row">
              <h2>Get your Tickets</h2>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="passangerCount">
                  How many people are you traveling with?
                </label>
                <input
                  name="passangerCount"
                  placeholder="1"
                  id="passangerCount"
                  type="number"
                  min="1"
                  max="100"
                  onChange={(e) => setPassangerCount(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="homePlanet">Where did you come from?</label>
                <select
                  name="homePlanet"
                  id="homePlanet"
                  placeholder="Home Planet"
                  onChange={(e) => setHomePlanet(e.target.value)}
                >
                  <option value="Earth">Earth</option>
                  <option value="Europa">Europa</option>
                  <option value="Mars">Mars</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="destination">What's your destination?</label>
                <select
                  name="destination"
                  id="destination"
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="TRAPPIST-1e">TRAPPIST-1e</option>
                  <option value="55 Cancri e">55 Cancri e</option>
                  <option value="PSO J318.5-22">PSO J318.5-22</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <button className="main-button" onClick={(e) => nextStage(e)}>
                Continue
              </button>
            </div>
          </div>
        )}

        {(stage !== 0) & (stage <= parseInt(passangerCount)) && (
          <div className="form-content">
            <div className="form-row">
              <h2>Passenger {stage}</h2>
            </div>

            <div className="form-row">
              <div className="form-row-col">
                <label htmlFor="name"> What's your name? </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Neil Amstrong"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-row-col">
                <label htmlFor="cryoSleep">Will you travel in cryosleep?</label>
                <select
                  name="cryoSleep"
                  id="cryoSleep"
                  onChange={(e) => setCryoSleep(e.target.value)}
                >
                  <option value="True">Yes</option>
                  <option value="False">No</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row-col3">
                <label htmlFor="cabin">
                  Choose your <br /> cabin:
                </label>
                <select
                  name="cabin"
                  id="cabin"
                  onChange={(e) => setCabin(e.target.value)}
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
              </div>
              <div className="form-row-col3">
                <label htmlFor="cabinNumber">
                  Choose your <br /> cabin number:
                </label>
                <input
                  name="cabinNumber"
                  placeholder="1"
                  id="cabinNumber"
                  type="number"
                  min="1"
                  max="999"
                  onChange={(e) => setCabinNumber(e.target.value)}
                />
              </div>
              <div className="form-row-col3">
                <label htmlFor="cabinSeatPlace">
                  Seat <br /> Place:
                </label>
                <select
                  name="cabinSeatPlace"
                  id="cabinSeatPlace"
                  onChange={(e) => setSeatPlace(e.target.value)}
                >
                  <option value="P">P</option>
                  <option value="S">S</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row-col">
                <label htmlFor="age">How old are you? (years)</label>
                <input
                  name="age"
                  placeholder="1"
                  id="age"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-row-col">
                <label htmlFor="vip">Will you travel in VIP?</label>
                <select
                  name="vip"
                  id="vip"
                  onChange={(e) => setVip(e.target.value)}
                >
                  <option value="True">Yes</option>
                  <option value="False">No</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-row-col">
                <label htmlFor="roomService">
                  Estimation of expenses in room service?
                </label>
                <input
                  name="roomService"
                  placeholder="1"
                  id="roomService"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setRoomService(e.target.value)}
                />
              </div>

              <div className="form-row-col">
                <label htmlFor="foodCourt">
                  Estimation of expenses in food court?
                </label>
                <input
                  name="foodCourt"
                  placeholder="1"
                  id="foodCourt"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setFoodCourt(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-row-col">
                <label htmlFor="shopping">
                  Estimation of expenses in shopping?
                </label>
                <input
                  name="shopping"
                  placeholder="1"
                  id="shopping"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setShopping(e.target.value)}
                />
              </div>

              <div className="form-row-col">
                <label htmlFor="spa">Estimation of expenses in spa?</label>
                <input
                  name="spa"
                  placeholder="1"
                  id="spa"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setSpa(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-row-col">
                <label htmlFor="VRDeck">
                  Estimation of expenses in VR deck?
                </label>
                <input
                  name="spa"
                  placeholder="1"
                  id="spa"
                  type="number"
                  min="1"
                  max="9999"
                  onChange={(e) => setVrDeck(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <button className="main-button" onClick={(e) => prevStage(e)}>
                Back
              </button>
              <button className="main-button" onClick={(e) => nextStage(e)}>
                Continue
              </button>
            </div>
          </div>
        )}

        {stage > parseInt(passangerCount) && (
          <div className="form-content">
            <button className="main-button" onClick={(e) => sendData(e)}>
              Send Data
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
