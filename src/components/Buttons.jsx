import React from "react";
import Keyboard from "../utils/Keyboard";

const Buttons = ({handleButtonClick}) => {
  return (
    <div id="nums">
      <Keyboard />
      <table>
        <tbody>
            <tr>
            <td className="cleartd" colSpan="2">
              <input type="button" id="clear" value="AC" onClick={() => handleButtonClick('AC')} />
            </td>
            <td><input type="button" id="divide" value="/" onClick={() => handleButtonClick("/")} /></td>
            <td><input type="button" id="multiply" value="x"  onClick={() => handleButtonClick("*")} /></td>
            </tr>
            <tr>
              <td><input type="button" id="seven" value="7" onClick={() => handleButtonClick("7")}/></td>
              <td><input type="button" id="eight" value="8" onClick={() => handleButtonClick("8")}/></td>
              <td><input type="button" id="nine" value="9" onClick={() => handleButtonClick("9")}/></td>
              <td><input type="button" id="add" value="+"  onClick={() => handleButtonClick("+")}/></td>
            </tr>
            <tr>
              <td><input type="button" id="four" value="4" onClick={() => handleButtonClick("4")}/></td>
              <td><input type="button" id="five" value="5" onClick={() => handleButtonClick("5")}/></td>
              <td><input type="button" id="six" value="6" onClick={() => handleButtonClick("6")}/></td>
              <td><input type="button" id="subtract" value="-"  onClick={() => handleButtonClick("-")}/></td>
            </tr>
            <tr>
              <td><input type="button" id="one" value="1" onClick={() => handleButtonClick("1")}/></td>
              <td><input type="button" id="two" value="2" onClick={() => handleButtonClick("2")}/></td>
              <td><input type="button" id="three" value="3" onClick={() => handleButtonClick("3")}/></td>
              <td className="equalstd" rowSpan="2">
                <input type="button" id="equals" value="=" onClick={() => handleButtonClick('=')} />
              </td>
            </tr>
            <tr>
              <td className="zerotd" colSpan="2">
                <input type="button" id="zero" value="0" onClick={() => handleButtonClick("0")}/>
              </td>
              <td><input type="button" id="decimal" value="."  onClick={() => handleButtonClick(".")}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
  
  export default Buttons;