import React, { Component } from "react";
import Header from "./components/header.jsx";
import StudentNavBar from "./components/studentNavBar.jsx";
import Footer from "./components/footer.jsx";
import CourseList from "./courseTable";

class CourseListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StudentNavBar />
        <CourseList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CourseListPage;
