import React, { Component } from "react";
import Header from "./components/header.jsx";
import AdvisorNavBar from "./components/advisorNavBar.jsx";
import AdvisorInfo from "./components/advisorInfo.jsx";
import Footer from "./components/footer.jsx";
import AdviseeScheduleTable from "./adviseeScheduleTable";
import auth from "./service/authService";
import CourseTableBody from "./components/courseTableBody";
import CourseTableHead from "./components/courseTableHead";
import { getSchedule, getUser } from "./service/userService";
import AdviseeHeader from "./components/adviseeHeader";

class AdviseeSchedule extends Component {
  state = {
    courses: [], //getPeople(),
    name: "",
  };
  async componentDidMount() {
    const { data: courses } = await getSchedule(this.props.match.params.id);
    const { data: name } = await getUser(this.props.match.params.id);
    if (!courses) return this.props.history.replace("/not-found");
    this.setState({ courses });
    this.setState({ name });
    console.log(name.fName);
  }
  render() {
    const user = auth.getCurrentUser();
    console.log(user);
    const { courses, name } = this.state;
    console.log(name.fName);

    return (
      <React.Fragment>
        <Header />
        <AdvisorNavBar />
        <AdvisorInfo user={user} />
        <h3 style={{ textAlign: "center" }}>
          {name.fName} {name.lName}'s Current Schedule
        </h3>
        <div class="container">
          <div class="row" align="center">
            <div class="col">
              <table className="table">
                <CourseTableHead />
                <CourseTableBody courses={courses} />
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdviseeSchedule;
