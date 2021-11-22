import React from "react";
import { Route, Switch } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.component";

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch>
  );
};

export default App;
