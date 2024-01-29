const Buttons = () => {
    return (
      <div id="nums">
        <table>
          <tr>
            <td className="cleartd" colspan="2"><input type="button" id="clear" value="AC"/></td>
            <td><input type="button" id="divide" value="/"/></td>
            <td><input type="button" id="multiply" value="x"/></td>
          </tr>
          <tr>
            <td><input type="button" id="nine" value="9"/></td>
            <td><input type="button" id="eight" value="8"/></td>
            <td><input type="button" id="seven" value="7"/></td>
            <td><input type="button" id="add" value="+"/></td>
          </tr>
          <tr>
            <td><input type="button" id="six" value="6"/></td>
            <td><input type="button" id="five" value="5"/></td>
            <td><input type="button" id="four" value="4"/></td>
            <td><input type="button" id="subtract" value="-"/></td>
          </tr>
          <tr>
            <td><input type="button" id="three" value="3"/></td>
            <td><input type="button" id="two" value="2"/></td>
            <td><input type="button" id="one" value="1"/></td>
            <td className="equalstd" rowspan="2"><input type="button" id="equals" value="="/></td>
          </tr>
          <tr>
            <td className="zerotd" colspan="2"><input type="button" id="zero" value="0"/></td>
            <td><input type="button" id="decimal" value="."/></td>
          </tr>
        </table>
      </div>
      
    );
  }
  
  export default Buttons;
  