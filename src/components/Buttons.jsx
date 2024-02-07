import React from "react";
import { useCalculator } from "../utils/Calculator";

const Buttons = () => {
  const { input, handleButtonClick, handleEqual, handleClear } = useCalculator();

  return (
      <div id="nums" onClick={(e) => handleButtonClick(e.target.textContent)}>
        <table>
          <tr>
            <td className="cleartd" colspan="2">
              <input type="button" id="clear" value="AC" onClick={handleClear}/>
            </td>
            <td><input type="button" id="divide" value="/"/></td>
            <td><input type="button" id="multiply" value="x"/></td>
          </tr>
          <tr>
            <td><input type="button" id="seven" value="7"/></td>
            <td><input type="button" id="eight" value="8"/></td>
            <td><input type="button" id="nine" value="9"/></td>
            <td><input type="button" id="add" value="+"/></td>
          </tr>
          <tr>
            <td><input type="button" id="four" value="4"/></td>
            <td><input type="button" id="five" value="5"/></td>
            <td><input type="button" id="six" value="6"/></td>
            <td><input type="button" id="subtract" value="-"/></td>
          </tr>
          <tr>
            <td><input type="button" id="one" value="1"/></td>
            <td><input type="button" id="two" value="2"/></td>
            <td><input type="button" id="three" value="3"/></td>
            <td className="equalstd" rowspan="2">
              <input type="button" id="equals" value="=" onClick={handleEqual}/>
            </td>
          </tr>
          <tr>
            <td className="zerotd" colspan="2">
              <input type="button" id="zero" value="0"/>
            </td>
            <td><input type="button" id="decimal" value="."/></td>
          </tr>
        </table>
      </div>
      
    );
  }
  
  export default Buttons;
  