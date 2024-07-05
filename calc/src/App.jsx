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
  let currenttext = "";
  let [textvalue, textstate] = useState("");
  let handleonclick = (lat) => {
    if (
      lat !== "c" &&
      lat !== "=" &&
      lat !== "+" &&
      lat !== "-" &&
      lat !== "*" &&
      lat !== "/" &&
      lat !== "."
    ) {
      textvalue = textvalue + lat;
      textstate(textvalue);
    } else if (
      (lat !== "c" && lat !== "=" && lat === "+") ||
      lat === "-" ||
      lat === "*" ||
      lat === "/" ||
      lat === "."
    ) {
      if (
        textvalue.charAt(textvalue.length - 1) !== "+" &&
        textvalue.charAt(textvalue.length - 1) !== "-" &&
        textvalue.charAt(textvalue.length - 1) !== "*" &&
        textvalue.charAt(textvalue.length - 1) !== "/" &&
        textvalue.charAt(textvalue.length - 1) !== "."
      ) {
        textvalue = textvalue + lat;
        textstate(textvalue);
      }
    } else if (lat === "=") {
      textvalue = eval(textvalue);
      textstate(textvalue);
    } else if (lat === "c") {
      textvalue = "";
      textstate(textvalue);
    }
  };
  return (
    <center>
      <div className="container">
        <Head tittle={head}></Head>
        <Input textvalue={textvalue}></Input>
        <Btn latter={arr} handleonclick={handleonclick}></Btn>
      </div>
    </center>
  );
}

export default App;
