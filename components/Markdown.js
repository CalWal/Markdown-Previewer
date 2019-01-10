import React from "react";

import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";

const marked = require("marked");

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: ""
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    let markdown = event.target.value;
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="container">
        <div>
          <FormGroup ControlID="formControlsTextarea"> </FormGroup>
          <ControlLabel> Markdown Input </ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Enter Markdown"
            value={this.state.markdown}
            onChange={this.updateMarkdown}
          />
        </div>

        <div>
          <h1>Markdown Output</h1>
          <div
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          />
          <div />
        </div>
      </div>
    );
  }
}

export default Markdown;
