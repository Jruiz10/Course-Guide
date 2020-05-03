import React, { Component } from "react";
import CourseTableBody from "./components/courseTableBody";
import CourseTableHead from "./components/courseTableHead";
//import { getCourses } from "./service/tempCourseService";
import { getSchedule } from "./service/userService";
import "./css/CourseSelection.css";
import auth from "./service/authService";
class CurrentScheduleTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
    this.handleSearch = this.handleSearch.bind(this);
  }
  state = {
    courses: [], //getPeople(),
    query: "",
  };
  async componentDidMount() {
    const { user } = this.props;
    var userId = user._doc._id;
    console.log(userId);
    const { data } = await getSchedule(userId);
    this.setState({ courses: data });

    console.log(this.state);
  }
  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };
  /*  handleLike = (course) => {
    const courses = [...this.state.courses];
    const index = courses.indexOf(course);
    courses[index].liked = !courses[index].liked;
    this.setState({ courses });
  }; */
  handleClick() {
    const toggle = !this.state.toggle;
    this.setState({ toggle }); //this.state.toggle =toggle is incorrect
  }
  filterCoursesByName = () => {
    let courses = [...this.state.courses];
    if (this.state.query) {
      const filtered = courses.filter((c) =>
        c.name.toLowerCase().startsWith(this.state.query.toLowerCase())
      );
      courses = filtered;
    }
    return courses;
  };
  render() {
    const courses = this.filterCoursesByName();
    const { user } = this.props;
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

export default CurrentScheduleTable;
