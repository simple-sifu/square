import React from "react";
import Square from "./Square";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handleClick");
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <div className="game">
        <Square onClick={this.handleClick} toggle={this.state.toggle} />
      </div>
    );
  }
}

export default Game;
