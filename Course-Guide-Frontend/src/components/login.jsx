import React, { Component } from "react";
import "../css/Login.css";
import Footer from "./footer.jsx";
import logo from "../img/Logo.png";
import LoginModal from "./loginModal.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault(); //prevent submitting to the server
    // const username = this.username.value;
    console.log("submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    console.log("state updated");
  };

  state = {
    modalOpen: false,
  };
  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <title>Login Page</title>
          {/* Bootstrap CSS */}
          <link
            href="https://fonts.googleapis.com/css?family=Archivo Black"
            rel="stylesheet"
          />
        </div>
        <div id="navbar">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div>
              <h2 align="center">Welcome to</h2>
              <h1 align="center">
                <strong>Course Guide</strong>
              </h1>
            </div>
            {/* <form
              onSubmit={this.handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  autoFocus
                  value={this.state.account.username}
                  onChange={this.handleChange}
                  name="username"
                  id="username"
                  type="text"
                  className="form-control"
                  style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  value={this.state.account.password}
                  onChange={this.handleChange}
                  name="password"
                  type="text"
                  className="form-control"
                  style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
            </form> */}
            <button
              className="button"
              id="loginBtn"
              onClick={this.handleModalOpen}
              style={{ width: "auto" }}
            >
              Sign In
            </button>
          </div>
        </div>
        <Footer />
        <LoginModal
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
          user={user}
        />
      </div>
    );
  }
}

export default Login;
