import React, { Component } from "react";
import ClickerSettings from "../ClickerSettings";
import cx from "classnames";
import styles from "./style.module.css";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      intervalId: null,
      time: 1000,
    };
    this.isRendered = false;
  }
  componentDidMount() {
    if (this.isRendered) {
      this.isRendered = false;
      return;
    }
    if (!this.state.intervalId) {
      this.automatikClick();
      setTimeout(() => {
        clearInterval(this.state.intervalId);
        this.setState({
          intervalId: null,
        });
      }, 30000);
    }
  }

  automatikClick = () => {
    const { step, intervalId, time } = this.state;
    if (!intervalId) {
      const intervalId = setInterval(() => {
        this.setState({
          count: this.state.count + step,
          intervalId,
        });
      }, time);
    }
  };
  stop = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };
  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };

  clickHandler = (count) => {
    this.setState({
      step: +count.target.value,
    });
  };
  buttonMath = () => {
    const { count, step } = this.state;
    this.setState({
      count: count + step,
    });
  };

  interval = (e) => {
    this.setState({
      time: +e.target.value,
    });
  };
  render() {
    const { count, step } = this.state;
    return (
      <div className={cx(styles.container)}>
        <p className={cx(styles.click)}>Клики {count}</p>
        <p className={cx(styles.text)}>Шаг: {step}</p>
        <ClickerSettings
          clickHandler={this.clickHandler}
          stop={this.stop}
          automatikClick={this.automatikClick}
          reset={this.reset}
          interval={this.interval}
          buttonMath={this.buttonMath}
        />
      </div>
    );
  }
}

export default Clicker;
