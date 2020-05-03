import React, { Component } from "react";
import "../css/MainScreen.css";
import userImg from "../img/default-user.jpg";
class StudentInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    return (
      <div class="container">
        <div class="row" id="card">
          <img src={userImg} id="userpic" width="150px" height="150 px" />
          <div class="col-sm">
            <h5>Student Name: {`${user._doc.fName} ${user._doc.lName}`}</h5>
            <h6>Area of Study: Finance</h6>
            <h6>Expected Graduation: 2021</h6>
            <h6>GPA: 2.01</h6>
            <h6>Advisor: Professor Ruby</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentInfo;
