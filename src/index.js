import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// HEAD
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

ReactDOM.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
>>>>>>> ca2987e8900dd5a4519f2c72ab2c974f9bc7edad
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
