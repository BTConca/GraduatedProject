import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const ReactMarkdown = require("react-markdown");
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
import axios from "axios";
import PropTypes, { func } from "prop-types";
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
      toHtml: ""
    };
  }

  toHtml = () => {
    return parse(this.state.data);
  };

  createMarkup = () => {
    return { __html: this.state.data.toString() };
  };

  handleSumit = event => {
    //async
    event.preventDefault();
    // const course = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   data: this.state.data
    // };

    // const respone = await API.post("courses", { course }).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });
    var a = parse(this.state.data);
    this.setState({ toHtml: a });
    console.log(a);
  };

  handleOnchange = (event, editor) => {
    this.setState({ data: editor.getData() });
    const data = this.state.data;
    console.log(data);
  };

  handleNameOnchange = event => {
    this.setState({ name: event.target.value });
  };

  handleDescriptonOnChange = event => {
    this.setState({ description: event.target.value });
  };

  componentDidMount() {
    if (iframely) {
      console.log("iframely work");
    }

    console.log("oembed convert is working");
  }

  componentDidUpdate() {
    // document.querySelectorAll("div[data-oembed-url]").forEach(element => {
    //   // Discard the static media preview from the database (empty the <div data-oembed-url="...">).
    //   while (element.firstChild) {
    //     element.removeChild(element.firstChild);
    //   }

    //   // Create the <a href="..." class="embedly-card"></a> element that Embedly uses
    //   // to discover the media.
    //   const anchor = document.createElement("a");

    //   anchor.setAttribute("href", element.dataset.oembedUrl);
    //   anchor.className = "embedly-card";

    //   element.appendChild(anchor);
    // });

    document.querySelectorAll("figure").forEach(element => {
      // Discard the static media preview from the database (empty the <div data-oembed-url="...">).
      element.removeAttribute("class");
    });

    console.log(document.querySelectorAll("figure"));
    console.log("oembed convert is working");
  }
  render() {
    return (
      <div className="content">
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
                    {this.state.toHtml}
                    {/* {parse(
                      '<figure><div data-oembed-url="https://www.youtube.com/watch?v=E1OunoCyuhY"><div class="iframely-embed"><div class="iframely-responsive"><iframe src="//cdn.iframe.ly/api/iframe?app=1&amp;api_key=9c95afb9bf715f866e621a&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DE1OunoCyuhY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div></div></div></figure>'
                    )} */}
                    {/* <div dangerouslySetInnerHTML={this.createMarkup()} /> */}
                    <div className="form-texteditor">
                      <h2>Content</h2>
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
