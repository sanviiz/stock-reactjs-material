import React from "react";
import { Button } from "@material-ui/core";
import Header from "./components/fragments/Header";
import Menu from "./components/fragments/Menu";
import Login from "./components/pages/Login";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Login />
    </div>
  );
}
