import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdvisorInfoModal from "./advisorInfoModal";
import "../css/MainScreen.css";

class StudentNavBar extends Component {
  state = {
    modalOpen: false,
  };

  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand nav-item" to="/studentHome">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link className="navbar-brand" to="/CourseList">
                    Course Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={this.handleModalOpen} className="navbar-brand">
                    Advisor Information
                  </Link>
                </li>
              </div>
            </div>
            <ul className="navbar-nav ml-auto">
              <li class="nav-item">
                <Link className="navbar-brand" to="/logout">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <AdvisorInfoModal
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
      </div>
    );
  }
}

export default StudentNavBar;
