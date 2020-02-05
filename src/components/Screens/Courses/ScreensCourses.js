import React, { Component } from 'react';

import API from 'utils/API.js';
import Courses from 'components/Courses/Courses.js';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js';
export class ScreensCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      courseslist: []
    };
  }

  async componentDidMount() {
    try {
      let coursesData = await API.get('courses', {
        params: {
          OwnerID: '123'
          // inc:
          //   'CourseID,CourseName,Description,Term,Certification,Status,Rate,Content'
        }
      }).then(res => {
        this.setState({
          courseslist: res.data
        });
        console.log('screenscourses.js');
        console.log(res);
        console.log(this.state.courseslist);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="content">
        <ErrorBoundary>
          <Courses CoursesList={this.state.courseslist} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ScreensCourses;
