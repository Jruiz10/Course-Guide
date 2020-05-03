import React, { Component } from "react";
import Header from "./components/header.jsx";
import StudentNavBar from "./components/studentNavBar.jsx";
import StudentInfo from "./components/studentInfo.jsx";
import Footer from "./components/footer.jsx";
import CurrentScheduleTable from "./currentScheduleTable";
import auth from "./service/authService";

class StudentHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const user = auth.getCurrentUser();
    console.log(user);
    return (
      <React.Fragment>
        <Header />
        <StudentNavBar />
        <StudentInfo user={user} />
        <h3 style={{ textAlign: "center" }}>Current Schedule</h3>
        <CurrentScheduleTable user={user} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default StudentHome;
