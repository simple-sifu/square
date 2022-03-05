import React from 'react';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        xIsNext: true,
        square: X,
    };
}

handleClick(i){
  this.setState({
      square: this.state.xIsNext ? 'X' : 'O'
  });
}


  render() {

    return (
      <div className="game">
          <Square 
            onClick={(i) => this.handleClick(i)}
          />
      </div>
    );
  }
}

export default Game;