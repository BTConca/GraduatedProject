import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import Card from "components/Card/Card.js";
import Button from "components/CustomButton/CustomButton.js";

class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: ""
    };
  }

  handleonQuestionChange = e => {
    this.setState({ question: e.target.value });
  };

  render() {
    return (
      <Card
        title="Quizzes"
        content={
          <div className="card-quizzes">
            <Form>
              <Form.Group controlId="quizzForm">
                <Form.Row>
                  <Form.Label>Quizzes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Question"
                    value={this.state.question}
                    onChange={this.handleonQuestionChange}
                  />
                </Form.Row>
                <Form.Row>
                  <Col>
                    A
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    B
                    <Form.Control placeholder="First name" />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    C
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    D
                    <Form.Control placeholder="First name" />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </div>
        }
      />
    );
  }
}

export default Quizzes;
