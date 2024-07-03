import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Input from "./components/TextInput";
import Btn from "./components/Btn";
import Head from "./components/Head";
import "./App.css";

function App() {
  let arr = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let head = "Calculater";
  return (
    <center>
      <div className="container">
        <Head tittle={head}></Head>
        <Input></Input>
        <Btn latter={arr}></Btn>
      </div>
    </center>
  );
}

export default App;
