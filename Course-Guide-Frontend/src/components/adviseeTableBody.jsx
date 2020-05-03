import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import { getAdvisee, getUser } from "../service/userService";
import auth from "../service/authService";
import axios from "axios";

class AdviseeTableBody extends Component {
  constructor(props) {
    super(props);
    console.log("advisee table body props = " + props);
  }
  state = {
    adviseeData: "",
  };
  async componentDidMount() {
    const user = auth.getCurrentUser();
    console.log(user);
    /* console.log(user._doc.advisees);
    var adviseeId = user._doc.advisees;
    const resp = await getUser(adviseeId);
    console.log(resp); */
    // this.setState({ adviseeData: data });
    // console.log(data);
  }

  render() {
    const { advisees } = this.props; //this.props.people
    console.log(advisees);
    //const { adviseeData1 } = this.state;
    //console.log(this.state.adviseeData.fName);

    // console.log(user);

    return (
      <tbody>
        {advisees.map((advisee, index) => (
          <tr key={index}>
            <td>{advisee.lName}</td>
            <td>{advisee.fName}</td>
            <td>
              <Link to={`/adviseeSchedule/${advisee._id}`}>
                <button className="btn-sm">View Schedule</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
export default AdviseeTableBody;
