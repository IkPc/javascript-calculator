import React, { useState } from "react";
import handleButtonClick from "../utils/Calculator.js";

const Buttons = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => handleButtonClick(prevInput, value));
  };

  return (
    <div id="nums">
      <table>
        <tbody>
            <tr>
            <td className="cleartd" colSpan="2">
              <input type="button" id="clear" value="AC" onClick={() => handleClick('AC')} />
            </td>
            <td><input type="button" id="divide" value="/" onClick={() => handleClick("/")} /></td>
            <td><input type="button" id="multiply" value="x"  onClick={() => handleClick("*")} /></td>
            </tr>
            <tr>
              <td><input type="button" id="seven" value="7" onClick={() => handleClick("7")}/></td>
              <td><input type="button" id="eight" value="8" onClick={() => handleClick("8")}/></td>
              <td><input type="button" id="nine" value="9" onClick={() => handleClick("9")}/></td>
              <td><input type="button" id="add" value="+"  onClick={() => handleClick("+")}/></td>
            </tr>
            <tr>
              <td><input type="button" id="four" value="4" onClick={() => handleClick("4")}/></td>
              <td><input type="button" id="five" value="5" onClick={() => handleClick("5")}/></td>
              <td><input type="button" id="six" value="6" onClick={() => handleClick("6")}/></td>
              <td><input type="button" id="subtract" value="-"  onClick={() => handleClick("-")}/></td>
            </tr>
            <tr>
              <td><input type="button" id="one" value="1" onClick={() => handleClick("1")}/></td>
              <td><input type="button" id="two" value="2" onClick={() => handleClick("2")}/></td>
              <td><input type="button" id="three" value="3" onClick={() => handleClick("3")}/></td>
              <td className="equalstd" rowSpan="2">
                <input type="button" id="equals" value="=" onClick={() => setInput(handleButtonClick(input, '='))} />
              </td>
            </tr>
            <tr>
              <td className="zerotd" colSpan="2">
                <input type="button" id="zero" value="0" onClick={() => handleClick("0")}/>
              </td>
              <td><input type="button" id="decimal" value="."  onClick={() => handleClick(".")}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
  
  export default Buttons;