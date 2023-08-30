import React, { useState } from "react";

function App() {
  // Stete
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  let [message, setMessage] = useState("");

  function calcBmi(e) {
    e.preventDefault();
    // console.log('test');

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 18.5) {
        message = "Underweight";
      } else if (bmi >= 18 && bmi <= 24.9) {
        message = "Normal weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        message = "Overweight";
      } else {
        message = "Obese";
      }

      setMessage(message)
    }
  }

  function realod() {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="title">BMI Calculation</h2>
        <form onSubmit={calcBmi}>
          <div className="container-cal">
            <label htmlFor="">Weight (kg)</label>
            <input placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="container-cal">
            <label htmlFor="">Height (m)</label>
            <input placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button type="submit" className="btn" onClick={calcBmi}>
              Submit
            </button>
            <button type="submit" className="btn btn-outline" onClick={realod}>
              Reloud
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p className="message">{message}</p>
        </div>

        {/* <div className="img-container">
            <img src="" alt="" />
          </div> */}
      </div>
    </div>
  );
}

export default App;
