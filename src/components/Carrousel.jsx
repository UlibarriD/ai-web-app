import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Result from "./Result";

function Carrousel() {
  const [modelResult, setModelResult] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      const resultJson = await JSON.parse(localStorage.getItem("resultJson"));
      setModelResult(resultJson);
      console.log(resultJson);
    } 

    getResult();
  }, []);

  return (
    <div>
      <Carousel>
        {modelResult.map((result) => {
          return(
            <Carousel.Item interval={5000}>
              <Result res={result}/>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
}

export default Carrousel;
