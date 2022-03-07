import React from 'react';
import Square from './Square';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        value: 'X'
    };
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  console.log("handleClick");
  this.setState({
      value: this.state.value === 'X' ? 'O' : 'X'
  });
}


  render() {

    return (
      <div className="game">
          <Square 
            onClick={this.handleClick}
          />
      </div>
    );
  }
}

export default Game;