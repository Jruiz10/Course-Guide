import React, { Component } from "react";
import CourseTableBody from "./components/courseTableBody";
import CourseTableHead from "./components/courseTableHead";
//import { getCourses } from "./service/tempCourseService";
import { getSchedule } from "./service/userService";
import "./css/CourseSelection.css";
import auth from "./service/authService";
class AdviseeScheduleTable extends Component {
  state = {
    courses: [], //getPeople(),
  };
  async componentDidMount() {
    const { data: courses } = await getSchedule(this.props.match.params.id);
    if (!courses) return this.props.history.replace("/not-found");
    this.setState({ courses });
  }

  render() {
    const { courses } = this.state;
    return (
      <React.Fragment>
        {/* <input
          type="text"
          className="form-control"
          name="search"
          placeholder="Search by Name"
          value={this.state.query}
          onChange={this.handleSearch}
        /> */}
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
      </React.Fragment>
    );
  }
}

export default AdviseeScheduleTable;
