import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Home extends Component {
  static defaultProps = {};

  render() {
    return (
      <div>
        <Button color="primary" variant="raised">
          Primary
        </Button>
        Welcome home!
      </div>
    );
  }
}

export default Home;
