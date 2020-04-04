import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import Home from "./Home/Home";

const theme = {
  global: {
    font: {
      family: "Microsoft Ya-Hei",
      size: "18px",
      height: "20px"
    },
    colors: {
      main: "#fec7d7",
      white: "#fffffe",
      secondary: "#d9d4e7",
      black: "#0e172c",
      tertiary: "#a786df"
    },
    focus:{
      border:{
        color: 'rgba(0,0,0,0)'
      }
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
        <Home></Home>
    </Grommet>
  );
}

export default App;
