import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  DropdownButton,
  Dropdown,
  InputGroup
} from "react-bootstrap";
import PropTypes, { number } from "prop-types";
import Card from "components/Card/Card.js";
import Button from "components/CustomButton/CustomButton.js";

// Document https://www.robinwieruch.de/react-state-array-add-update-remove

class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: false,
      question: this.props.question,
      answer: this.props.answer,
      answeroptions1: this.props.answeroptions1,
      answeroptions2: this.props.answeroptions2,
      answeroptions3: this.props.answeroptions3,
      answeroptions4: this.props.answeroptions4
    };
  }

  handleAddQuizz = () => {
    const quizz = {
      question: this.state.question,
      answer: this.state.answer,
      index: this.props.index,
      answeroptions1: this.state.answeroptions1,
      answeroptions2: this.state.answeroptions2,
      answeroptions3: this.state.answeroptions3,
      answeroptions4: this.state.answeroptions4
    };

    console.log("tim pa thi");
    this.props.addNewQuizz(quizz);
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleDropdownItemClick = (key, e) => {
    this.setState({
      answer: key
    });
  };

  render() {
    // const question = this.props.question;
    // const answer = this.props.answer;
    // const answeroptions1 = this.props.answeroptions1;
    // const answeroptions2 = this.props.answeroptions2;
    // const answeroptions3 = this.props.answeroptions3;
    // const answeroptions4 = this.props.answeroptions4;

    return (
      <div className="content">
        <Form>
          <Form.Group controlId="quizzForm">
            <Form.Row>
              <Form.Label>Question {this.props.index}:</Form.Label>

              <Form.Control
                name="question"
                readOnly={this.state.isDisable}
                as="textarea"
                row="2"
                placeholder="Enter Question"
                value={this.state.question}
                onChange={this.handleChange}
              />
            </Form.Row>
            <Form.Row>
              <Col>
                A
                <Form.Control
                  name="answeroptions1"
                  readOnly={this.props.isDisable}
                  as="textarea"
                  row="1"
                  placeholder="Enter Answer option"
                  value={this.state.answeroptions1}
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                B
                <Form.Control
                  name="answeroptions2"
                  readOnly={this.state.isDisable}
                  as="textarea"
                  row="1"
                  placeholder="Enter Answer option"
                  value={this.state.answeroptions2}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                C
                <Form.Control
                  name="answeroptions3"
                  readOnly={this.state.isDisable}
                  as="textarea"
                  row="1"
                  placeholder="Enter Answer option"
                  value={this.state.answeroptions3}
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                D
                <Form.Control
                  name="answeroptions4"
                  readOnly={this.state.isDisable}
                  as="textarea"
                  row="1"
                  placeholder="Enter Answer option"
                  value={this.state.answeroptions4}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Answer</InputGroup.Text>
                </InputGroup.Prepend>
                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  title={this.state.answer}
                  id="input-group-dropdown-2"
                >
                  <Dropdown.Item
                    onSelect={this.handleDropdownItemClick}
                    eventKey="A"
                    href="#"
                  >
                    A
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={this.handleDropdownItemClick}
                    eventKey="B"
                    href="#"
                  >
                    B
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={this.handleDropdownItemClick}
                    eventKey="C"
                    href="#"
                  >
                    C
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={this.handleDropdownItemClick}
                    eventKey="D"
                    href="#"
                  >
                    D
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              {/* <Button
                variant="secondary"
                type="button"
                onClick={this.handleAddQuizz}
              >
                + ADD
              </Button> */}
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Quizzes;
