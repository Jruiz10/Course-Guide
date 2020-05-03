import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
class CourseTableBody extends Component {
  render() {
    const { courses } = this.props; //this.props.people
    return (
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.courseID}</td>
            <td>{course.date}</td>
            <td>{course.credits}</td>
            {/* <td>
               <button
                onClick={() => {
                  this.props.onDelete(course);
                }}
                className="btn btn-danger btn-sm"
              >
                Button
              </button> 
            </td>*/}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default CourseTableBody;
