import React from 'react';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         boardData: [['\u00A0', '\u00A0', '\u00A0'], ['\u00A0', '\u00A0', '\u00A0'], ['\u00A0', '\u00A0', '\u00A0']],
         currentPlayer: 0,
         playerNames: ['PlayerA', 'PlayerB']
      };

      this.onResetGame = this.onResetGame.bind(this);
      this.onBoardClick = this.onBoardClick.bind(this);
   }

   onResetGame() {
      this.setState({ 
         boardData: [['\u00A0', '\u00A0', '\u00A0'], ['\u00A0', '\u00A0', '\u00A0'], ['\u00A0', '\u00A0', '\u00A0']],
         currentPlayer: 0
      });      
   }

   onBoardClick(x, y) {
      this.state.boardData[x][y] = this.state.currentPlayer == 0 ? 'X' : 'O';
      this.state.currentPlayer = this.state.currentPlayer == 0 ? 1 : 0;

      this.setState({ 
         boardData: this.state.boardData,
         currentPlayer: this.state.currentPlayer
      });
   }

   render() {
      return (
         <div>
            <div>
               <h1>Three in a row</h1>
            </div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6">
                     <Board 
                        data={this.state.boardData} 
                        currentPlayer={this.state.currentPlayer} 
                        onBoardClick={this.onBoardClick} />
                  </div>
                  <div className="col-md-6">
                     <GameInfo 
                        playerName={this.state.playerNames[this.state.currentPlayer]}
                        onResetGame={this.onResetGame} />
                  </div>               
               </div>
            </div>
         </div>
      );
   }
}

export default App;