import React from 'react';
import './About.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <section className="about__container">
        <h1>현재 시간</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </section>
    );
  }
}

export default Clock;
