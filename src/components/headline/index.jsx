import React, { Component } from "react";

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) return null;

    return (
      <div>
        <h1>{header}</h1>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Headline;
