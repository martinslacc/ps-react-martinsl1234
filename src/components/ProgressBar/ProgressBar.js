import React from "react";
import PropTypes from "prop-types";

class ProgressBar extends React.Component {
  getColor = percent => {
    if (percent === 100) return "green";
    return percent > 50 ? "lightgreen" : "red";
  };

  getWidthAsPercentOfTotalWidth = (width, percent) => {
    return parseInt(width * (percent / 100), 10);
  };

  render() {
    const { percent, width, height } = this.props;

    return (
      <div style={{ border: "1px solid lightgray", width }}>
        <div
          style={{
            width: this.getWidthAsPercentOfTotalWidth(width, percent),
            height,
            backgroundColor: this.getColor(percent)
          }}
        ></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number,
  /** Bar width */
  width: PropTypes.number,
  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  percent: 0,
  width: 150,
  height: 5
};

export default ProgressBar;
