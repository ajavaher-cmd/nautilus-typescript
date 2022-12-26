import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store/store";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <h1 className="h1">Nautilus</h1>
    <Calculator />
  </Provider>
  , document.getElementById("root")
);