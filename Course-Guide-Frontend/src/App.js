import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import {
  StudentHomePage,
  AdvisorHomePage,
  CourseListPage,
  AdviseePage,
  LogOut,
} from "./pages";
import auth from "./service/authService";
import Logout from "./components/logout";
import AdvisorHome from "./advisorHome";
import StudentHome from "./studentHome";
import Login from "./components/login";
import AdviseeSchedule from "./adviseeSchedule";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log("App.js state = " + user);
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    console.log("App.js state = " + user);

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login user={user} {...props} />}
          ></Route>
          <Route exact path="/CourseList" component={CourseListPage} />
          <Route exact path="/logout" component={Logout} />
          <Route
            exact
            path="/studentHome"
            render={(props) => <StudentHome user={user} {...props} />}
          ></Route>
          <Route
            exact
            path="/advisorHome"
            render={(props) => <AdvisorHome user={user} {...props} />}
          ></Route>
          <Route
            exact
            path="/adviseeSchedule/:id"
            render={(props) => <AdviseeSchedule user={user} {...props} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
