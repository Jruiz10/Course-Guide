import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../service/authService";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // auth.loginWithJwt(response.headers["x-access-token"]);
      const user = auth.getCurrentUser();
      const isAdvisor = user._doc.isAdvisor;
      console.log(isAdvisor);
      //const { state } = this.props.location;
      if (isAdvisor) {
        console.log("Going to advisor page");
        window.location = "/advisorHome";
      } else if (!isAdvisor) {
        window.location.href = "/studentHome";
        console.log("Going to student page");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    /* if (user._doc.isAdvisor == true) {
      if (auth.getCurrentUser()) return <Redirect to="/advisorHome" />;
    } else {
      if (auth.getCurrentUser()) return <Redirect to="/studentHome" />;
    } */

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

{
  /* <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.data.username}
              onChange={this.handleChange}
              id="username"
              aria-describedby="emailHelp"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.data.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              className="form-control"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.password}
              </div>
            )}
            {/*  <Link to="/studentHome">
              <button
                disabled={this.validate()}
                className="btn btn-primary"
                style={{ marginLeft: "20%" }}
              >
                Login Student
              </button>
            </Link> 
            <Link to="/advisorHome">
              <button
                disabled={this.validate()}
                className="btn btn-primary"
                style={{ marginLeft: "20%", marginTop: "10px" }}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div> */
}
