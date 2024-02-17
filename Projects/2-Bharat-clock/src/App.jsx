import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import ClockTiming from "./Components/ClockTiming";

function App() {
  return (
    <div>
      <ClockHeading />
      <ClockSlogan />
      <ClockTiming />
    </div>
  );
}

export default App;
