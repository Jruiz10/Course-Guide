import React, { Component } from "react";
import "../css/MainScreen.css";
import Logo from "../img/Logo.png";
class Header extends Component {
  render() {
    return (
      <div className="row1">
        <div className="col1">
          <div className="logo-header">
            <img id="logo" src={Logo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
