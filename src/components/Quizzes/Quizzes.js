import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import PropTypes, { number } from "prop-types";
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
    let index = 1;
    return (
      <Form>
        <Form.Group controlId="quizzForm">
          <Form.Row>
            <Form.Label>Question {index}:</Form.Label>
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
    );
  }
}

export default Quizzes;
