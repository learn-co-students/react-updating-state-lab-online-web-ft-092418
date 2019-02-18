import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    const clickCount = this.state.timesClicked;
    this.setState({
      timesClicked: clickCount + 1
    });
  }

  render = () => <button onClick={this.handleClick}>{this.state.timesClicked}</button>
}