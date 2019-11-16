import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class FormTexteditor extends Component {
  render() {
    return (
      <div className="form-texteditor">
        <h2>Create course</h2>
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

export default FormTexteditor;
