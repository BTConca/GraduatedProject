import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.js";
import Card from "components/Card/Card.js";
import axios from "axios";
import PropTypes from "prop-types";
import API from "utils/API";

const useAxios = (url, setData) => {
  useEffect(() => {
    () => {
      let mounted = true;

      const loadData = async () => {
        const result = await axios.get(url);
        if (mounted) {
          setData(result.data);
        }
      };
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);
};

class ScreenEditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      name: "",
      description: "",
      data: ""
    };
  }

  handleSumit = async event => {
    event.preventDefault();
    const course = {
      id: this.state.courseId,
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
                    <div className="form-texteditor">
                      <h2>Content</h2>
                      <CKEditor
                        editor={ClassicEditor}
                        data={"<p>Let create your course<p>"}
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
          >
        </Container>
      </div>
    );
  }
}

export default ScreenEditCourse;
