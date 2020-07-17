import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Smurf from "./components/Smurf";
// import SmurfForm from "./components/SmurfForm";

import { smurfReducer } from "./store/reducers";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
