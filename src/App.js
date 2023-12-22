import "./index.css";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState({
    dotOne: true,
    dotTwo: false,
  });

  console.log(status);

  return (
    <div className="App">
      <div className="container">
        <div className="leftContainer" style={{ opacity: status.dotOne }}>
          <header>
            <h3>dots.</h3>
          </header>
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
          <Circle
            circleColor="orangered"
            status={status.dotOne}
            setStatus={setStatus}
          />
        </div>
        <div className="rightContainer" style={{ opacity: status.dotTwo }}>
          <header>
            <h3>dots.</h3>
          </header>
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
          <Circle
            circleColor="white"
            status={status.dotTwo}
            setStatus={setStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default App;