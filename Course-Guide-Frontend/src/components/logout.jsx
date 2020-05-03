import { Component } from "react";
import auth from "../service/authService";
class Logout extends Component {
  componentDidMount() {
    auth.logout();
    //window.location = "/";
    window.location.href = "http://localhost:3000";
  }

  render() {
    return null;
  }
}

export default Logout;
