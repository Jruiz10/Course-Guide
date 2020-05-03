import React, { Component } from "react";
import "../css/MainScreen.css";
import Logo from "../img/Logo.png";
import { getUser } from "../service/userService";

class AdviseeHeader extends Component {
  state = {
    adviseeData: [], //getPeople(),
  };
  async componentDidMount() {
    const { data: adviseeData } = await getUser(this.props.match.params.id);
    if (!adviseeData) return this.props.history.replace("/not-found");
    this.setState({ adviseeData });
  }
  render() {
    const { adviseeData } = this.state;
    console.log(this.state);
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          {`${this.state.fName}`}'s Current Schedule
        </h3>
      </div>
    );
  }
}

export default AdviseeHeader;
