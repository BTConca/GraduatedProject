import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import GFMDataProcessor from "@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor";


import Button from "components/CustomButton/CustomButton.js";
import Card from "components/Card/Card.js";
import axios from "axios";
import PropTypes, { func } from "prop-types";
import API from "utils/API";

const ReactMarkdown = require("react-markdown");
const 
var stringsSomeWithHtml = str => {
  return <Fragment>{str}</Fragment>;
};

//Create Plug-in Markdown for getting output in markdown formation
function Markdown(editor) {
  editor.data.processor = new GFMDataProcessor();
}

const editorConfiguration = {
  plugins: [Markdown, Essentials, Bold, Italic, Paragraph],
  toolbar: ["bold", "italic"]
};

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      data: "<p>Let create your course<p>",
      editor: ClassicEditor
    };
  }

  handleSumit = async event => {
    event.preventDefault();
    const course = {
      name: this.state.name,
      description: this.state.description,
      data: this.state.data
    };

    const respone = await API.post("courses", { course }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  handleOnchange = (event, editor) => {
    this.setState({ data: editor.getData() });
    const data = this.state.data;
    console.log({ event, editor, data });
  };

  handleNameOnchange = event => {
    this.setState({ name: event.target.value });
  };

  handleDescriptonOnChange = event => {
    this.setState({ description: event.target.value });
  };

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
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          value={this.state.name}
                          onChange={this.handleNameOnchange}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your description"
                          value={this.state.description}
                          onChange={this.handleDescriptonOnChange}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    </Form>
                    <ReactMarkdown source={this.state.data} />
                    <div className="form-texteditor">
                      <h2>Content</h2>
                      <CKEditor
                        editor={this.state.editor}
                        config={editorConfiguration}
                        data={this.state.data}
                        onInit={editor => {
                          console.log("editor is ready to use", editor);
                        }}
                        onChange={this.handleOnchange}
                        onBlur={(event, editor) => {
                          console.log("BLur", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus", editor);
                        }}
                      />
                    </div>
                    <Button
                      varian="info"
                      pullRight
                      fill
                      type="submit"
                      onClick={this.handleSumit}
                    >
                      Save
                    </Button>
                  </div>
                }
              ></Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EditCourse;
