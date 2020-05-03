import React, { Component } from "react";
import "../css/MainScreen.css";
import userImg from "../img/default-user.jpg";

class AdvisorInfo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  render() {
    const { user } = this.props;
    return (
      <div class="container">
        <div class="row" id="card">
          <img src={userImg} id="userpic" width="150px" height="150 px" />
          <div class="col-sm">
            <h5>Advisor Name: {`${user._doc.fName} ${user._doc.lName}`} </h5>
            <h6>Associate Professor of Software Engineering</h6>
            <h6>Number of Advisees: {`${user._doc.advisees.length}`}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvisorInfo;
