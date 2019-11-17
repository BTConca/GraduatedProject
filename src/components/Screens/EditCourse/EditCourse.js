import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Row, Col, Form } from "react-bootstrap";
import Card from "components/Card/Card.js";

class ScreenEditCourse extends Component {
  consntructor(props) {
    this.initialState = {
      CourseID: "",
      CourseName: "",
      Content: ""
    };
  }

  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col>
              <Card
                title="Basic infomation"
                content={
                  <div>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your description"
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    </Form>
                    <Texteditor />
                  </div>
                }
              ></Card>
            </Col>
          </Row>
          >
        </Container>
      </div>
    );
  }
}

class Texteditor extends Component {
  render() {
    return (
      <div className="form-texteditor">
        <h2>Content</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Let create your course<p>"
          onInit={editor => {
            console.log("editor is ready to use", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("BLur", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus", editor);
          }}
        />
      </div>
    );
  }
}

export default ScreenEditCourse;
