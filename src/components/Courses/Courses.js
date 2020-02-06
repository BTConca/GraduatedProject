import React, { Component } from 'react';

import Course from 'components/Courses/Course.js';
import Card from 'components/Card/Card.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Courses extends Component {
  render() {
    const list = this.props.CoursesList;

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
                    <Link
                      to={{
                        pathname: '/mentor/courses/' + course.CourseID,
                        courseProps: {
                          name: course.CourseName,
                          content: course.Content
                        },
                        state: {
                          course
                        }
                      }}
                    >
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
                    </Link>
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
