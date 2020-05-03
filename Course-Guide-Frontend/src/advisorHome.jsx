import React, { Component } from "react";
import Header from "./components/header.jsx";
import AdvisorNavBar from "./components/advisorNavBar.jsx";
import AdvisorInfo from "./components/advisorInfo.jsx";
import AdviseeTable from "./adviseeTable.jsx";
import Footer from "./components/footer.jsx";
import auth from "./service/authService";

class AdvisorHome extends Component {
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
        <AdvisorNavBar />
        <div>
          <AdvisorInfo user={user} />
          <AdviseeTable user={user} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdvisorHome;
