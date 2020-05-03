import React, { Component } from "react";
import StudentHome from "./studentHome";
import CourseList from "./courseListPage";
import Login from "./components/login";
import AdvisorHome from "./advisorHome";
import AdviseeHomepage from "./adviseePage";

export const StudentHomePage = () => (
  <div>
    <StudentHome />
  </div>
);
export const AdvisorHomePage = () => (
  <div>
    <AdvisorHome />
  </div>
);

export const CourseListPage = () => (
  <div>
    <CourseList />
  </div>
);

export const AdviseePage = () => (
  <div>
    <AdviseeHomepage />
  </div>
);

export const LogOut = () => (
  <div>
    <Login />
  </div>
);
