import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import KycCapability from "./KycCapability";

const App = () => (
  <div>
    <KycCapability />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
