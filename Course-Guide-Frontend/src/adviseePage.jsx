import React, { Component } from "react";
import Header from "./components/header.jsx";
import AdvisorNavBar from "./components/advisorNavBar.jsx";
import StudentInfo from "./components/studentInfo.jsx";
import Footer from "./components/footer.jsx";
import CourseTable from "./courseTable";

class AdviseePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <AdvisorNavBar />
        <StudentInfo />
        <h3 style={{ textAlign: "center" }}>Current Schedule</h3>
        <CourseTable />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdviseePage;
