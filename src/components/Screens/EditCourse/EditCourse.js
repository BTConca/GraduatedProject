import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
var parse = require("html-react-parser");

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import GFMDataProcessor from "@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";

import Button from "components/CustomButton/CustomButton.js";
import Card from "components/Card/Card.js";
import Quizzes from "components/Quizzes/Quizzes.js";
import axios from "axios";
import API from "utils/API";

var IFRAME_SRC = "//cdn.iframe.ly/api/iframe";
var API_KEY = "9c95afb9bf715f866e621a";

var stringsSomeWithHtml = str => {
  return <Fragment>{str}</Fragment>;
};

//Create Plug-in Markdown for getting output in markdown formation
function Markdown(editor) {
  editor.data.processor = new GFMDataProcessor();
}

const editorConfiguration = {
  plugins: [Essentials, Bold, Italic, Paragraph, MediaEmbed],
  toolbar: ["bold", "italic", "mediaEmbed"],
  mediaEmbed: {
    // Previews are always enabled if there’s a provider for a URL (below regex catches all URLs)
    // By default `previewsInData` are disabled, but let’s set it to `false` explicitely to be sure
    previewsInData: true,

    providers: [
      {
        // hint: this is just for previews. Get actual HTML codes by making API calls from your CMS
        name: "iframely previews",

        // Match all URLs or just the ones you need:
        url: /.+/,

        html: match => {
          const url = match[0];

          var iframeUrl =
            IFRAME_SRC +
            "?app=1&api_key=" +
            API_KEY +
            "&url=" +
            encodeURIComponent(url);
          // alternatively, use &key= instead of &api_key with the MD5 hash of your api_key
          // more about it: https://iframely.com/docs/allow-origins

          return (
            // If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
            '<div class="iframely-embed">' +
            '<div class="iframely-responsive">' +
            `<iframe src="${iframeUrl}" ` +
            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
            "</iframe>" +
            "</div>" +
            "</div>"
          );
        }
      }
    ]
  }
};

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      data: "<p>Let create your course<p>",
      editor: ClassicEditor,
      toHtml: "",
      quizzes: []
    };
    this.child = React.createRef();
  }

  toHtml = () => {
    return parse(this.state.data);
  };

  createMarkup = () => {
    return { __html: this.state.data.toString() };
  };

  handleSumit = event => {
    event.preventDefault();
    this.child.current.handleAddQuizz();

    // const data = {
    //   CourseName: "vankhai",
    //   Description: "test",
    //   Rate: 5,
    //   Term: 1997,
    //   Certification: "test",
    //   Status: "test"
    // };
    // axios
    //   .post("https://gamifi.herokuapp.com/courses", data)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // var a = parse(this.state.data);
    // this.setState({ toHtml: a });
    // console.log(a);
  };

  // Add quizz button
  handleAddQuizz = e => {
    e.preventDefault();
    const quizz = {
      question: "",
      answer: "",
      answeroptions1: "",
      answeroptions2: "",
      answeroptions3: "",
      answeroptions4: ""
    };

    this.setState(state => {
      const quizzes = state.quizzes.concat(quizz);

      return {
        quizzes
      };
    });
  };

  handleSaveQuizz = input => {
    this.setState(state => {
      const quizzes = state.quizzes.map((quizz, index) => {
        console.log(index, input.index);
        quizz => {};
        if (index === input.index - 1) {
          quizz.question = input.question;
          quizz.answer = input.answer;
          quizz.answeroptions1 = input.answeroptions1;
          quizz.answeroptions2 = input.answeroptions2;
          quizz.answeroptions3 = input.answeroptions3;
          quizz.answeroptions4 = input.answeroptions4;
          return quizz;
        } else return quizz;
      });

      console.log("under are array quizzes");
      console.log(quizzes);
      return {
        quizzes
      };
    });
    console.log(this.state.quizzes);
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  //editor handler
  handleOnchange = (event, editor) => {
    this.setState({ data: editor.getData() });
    // const data = this.state.data;
    // console.log(data);
  };

  componentDidMount() {
    console.log(this.state.quizzes[0]);

    if (iframely) {
      console.log("iframely work");
    }

    console.log("oembed convert is working");
  }

  componentDidUpdate() {
    document.querySelectorAll("figure").forEach(element => {
      // Discard the static media preview from the database (empty the <div data-oembed-url="...">).
      element.removeAttribute("class");
    });

    console.log(document.querySelectorAll("figure"));
    console.log("oembed convert is working");
  }
  render() {
    return (
      <section className="content">
        <Container fluid>
          <Row>
            <Col sm={8}>
              <Card
                title="Basic infomation"
                content={
                  <div>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Enter name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                          name="description"
                          as="textarea"
                          row="3"
                          placeholder="Enter your description"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                        <Form.Text className="text-muted">
                          Your description will be showed on course's background
                        </Form.Text>
                      </Form.Group>
                    </Form>
                    <div className="form-texteditor">
                      <h5 className="form-label">Content</h5>
                      <CKEditor
                        editor={this.state.editor}
                        config={editorConfiguration}
                        data={this.state.data}
                        onInit={editor => {}}
                        onChange={this.handleOnchange}
                        onBlur={(event, editor) => {}}
                        onFocus={(event, editor) => {}}
                      />
                    </div>

                    <h5 className="form-label">Quizzes</h5>
                    <div className="card-quizzes">
                      {/* {this.state.quizzes[0]
                        ? this.state.quizzes[0]["question"]
                        : "Null"} */}
                      {this.state.quizzes.map((value, index) => (
                        <div>
                          {value ? (
                            <Quizzes
                              ref={this.child}
                              key={index}
                              index={index + 1}
                              answer={value.answer}
                              question={value.question}
                              answeroptions1={value.answeroptions1}
                              answeroptions2={value.answeroptions2}
                              answeroptions3={value.answeroptions3}
                              answeroptions4={value.answeroptions4}
                              addNewQuizz={this.handleSaveQuizz}
                            />
                          ) : (
                            "this is not good"
                          )}
                        </div>
                      ))}
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={this.handleAddQuizz}
                      >
                        + ADD
                      </Button>
                    </div>
                    <Button
                      varian="info"
                      fill
                      floatRight
                      type="submit"
                      onClick={this.handleSumit}
                    >
                      Save
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default EditCourse;
