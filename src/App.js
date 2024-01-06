import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //logic
  let calcBmi = (e) => {
    if (weight === 0 || height === 0) {
      alert("please enter valid weight and height to check bmi");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("you are under weight");
      } else if (bmi >= 25 || bmi < 30) {
        setMessage(" you are healthy weight person");
      } else {
        setMessage("you are overweight");
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>This is app for BMI calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>height (in)</label>
            <input
              type="text"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              {" "}
              submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              reload
            </button>
          </div>
          <div className="center">
            <h3> Your BMI is : {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
