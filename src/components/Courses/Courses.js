import React, { Component } from 'react';

import Course from 'components/Courses/Course.js';
import Card from 'components/Card/Card.js';
import { Container, Row, Col } from 'react-bootstrap';

export class Courses extends Component {
  render() {
    console.log('courses.js');
    console.log(this.props.CoursesList);
    const list = this.props.CoursesList;
    list.map(item => console.log(item));

    let count = 0;

    return (
      <div className="content">
        <Card
          title="MY COURSES"
          content={
            <Container fluid="true">
              <Row>
                {list.map((course, index) => (
                  <Col lg={3} md={4} sm={6} key={course.CourseID}>
                    <div onClick={() => alert('Clicked' + index)}>
                      <Card
                        content={
                          <Course
                            CourseID={course.CourseID}
                            CourseName={course.CourseName}
                            Desciption={course.Description}
                            Term={course.Term}
                            Certification={course.Certification}
                            Status={course.Status}
                            Rate={course.Rate}
                            Content={course.Content}
                          />
                        }
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          }
        />
      </div>
    );
  }
}

export default Courses;
