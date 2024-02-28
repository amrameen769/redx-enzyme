import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    const { header, desc, userArr } = this.props;

    if (!header) return null;

    return (
      <div>
        <h1>{header}</h1>
        <p>{desc}</p>
        {userArr?.length > 0 && <h2>{userArr[0].fName}</h2>}
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  userArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    }),
  ),
};

export default Headline;
