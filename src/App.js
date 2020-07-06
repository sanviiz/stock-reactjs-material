import React from "react";
import { Button } from "@material-ui/core";
import Header from "./components/fragments/Header";
import Menu from "./components/fragments/Menu";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}
