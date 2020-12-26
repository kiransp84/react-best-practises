import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/app/App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
