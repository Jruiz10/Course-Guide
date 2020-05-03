import React, { Component } from "react";
import CourseTableBody from "./components/courseTableBody";
import CourseTableHead from "./components/courseTableHead";
//import { getCourses } from "./service/tempCourseService";
import { getCourses } from "./service/courseService";
import "./css/CourseSelection.css";
class CourseTable extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }
  state = {
    courses: [], //getPeople(),
    query: "",
  };
  async componentDidMount() {
    console.log("componentDidMount");
    const { data } = await getCourses();
    console.log("retrieve courses" + data);
    this.setState({ courses: data });
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

export default CourseTable;
