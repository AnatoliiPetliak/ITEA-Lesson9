import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import LocalizationWrapper from "./LocalizationWrapper";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import config from "../config";

import "./App.css";
const supportedLangs = config.supportedLangs.join("|");
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path={`/:locale(${supportedLangs})`}
              component={LocalizationWrapper}
            />
            <Redirect to={config.defaultLang} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
