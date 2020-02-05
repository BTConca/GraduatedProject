import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import cx from "classnames";
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const { fill, simple, floatRight, round, block, ...rest } = this.props;

    const btnClasses = cx({
      "btn-fill": fill,
      "btn-simple": simple,
      "float-right": floatRight,
      "btn-block": block,
      "btn-round": round
    });

    return <Button className={btnClasses} {...rest} />;
  }
}

CustomButton.propTypes = {
  fill: PropTypes.bool,
  simple: PropTypes.bool,
  pullRight: PropTypes.bool,
  block: PropTypes.bool,
  round: PropTypes.bool
};

export default CustomButton;
