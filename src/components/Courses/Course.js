import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Course extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <ul>
            <li>CourseID: {this.props.CourseID}</li>
            <li>CourseName: {this.props.CourseName}</li>
            <li>Desciption: {this.props.Desciption}</li>
            <li>Term: {this.props.Term}</li>
            <li>Certification: {this.props.Certification}</li>
            <li>Status: {this.props.Status}</li>
            <li>Rate: {this.props.Rate}</li>
            <li>Content: {this.props.Content}</li>
          </ul>
        </React.Fragment>
      </div>
    );
  }
}

Course.propTypes = {
  CourseID: propTypes.string.isRequired,
  CourseName: propTypes.string,
  Desciption: propTypes.string,
  Term: propTypes.number,
  Certification: propTypes.string,
  Status: propTypes.string,
  Rate: propTypes.number,
  Content: propTypes.string
};

export default Course;
