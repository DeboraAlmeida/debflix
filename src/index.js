import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/* import { BrowserRouter, Switch, Route } from "react-router-dom"; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </BrowserRouter> */
