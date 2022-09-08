import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import KycCapability from "./KycCapability";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <KycCapability />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
