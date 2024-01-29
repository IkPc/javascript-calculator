import React from "react";
import "./Main.scss";
import Buttons from "../components/Buttons";
import Display from "../components/Display";

const Main = () => (
    <div>
        <div className="header">
        </div>
        <div className="content">
            <Display />
            <Buttons />
        </div>
        <div className="footer">
        </div>
    </div>
);

export default Main;