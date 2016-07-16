import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         boardData: [
            ['\u00A0', '\u00A0', '\u00A0'],
            ['\u00A0', '\u00A0', '\u00A0'],
            ['\u00A0', '\u00A0', '\u00A0']
         ],
         currentPlayer: 0,
         playerNames: ['', '']
      }

      this.onBoardClick = this.onBoardClick.bind(this);
   }

   onBoardClick(x, y) {
         console.log('click!')
         this.state.boardData[x][y] = this.state.currentPlayer == 0 ? 'X' : 'O';
         this.setState({ boardData: this.state.boardData });
   }

   render() {
      return (
         <div>
            <div>
               <h1>Three in a row</h1>
            </div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-8">
                     <Board 
                        data={this.state.boardData} 
                        currentPlayer={this.state.currentPlayer} 
                        onBoardClick={this.onBoardClick} />
                  </div>
                  <div className="col-md-4">
                  </div>               
               </div>
            </div>
         </div>
      );
   }
}

class Board extends React.Component {
   
   constructor(props) {
      super(props);
   }

   render() {

      var cellStyle = {
         textAlign: 'center',
         fontSize: '75px',
         fontWeigth: 'bold',
         border: '2px solid black'
      };

      return (
         <div className="container-fluid">
            <div className="row">
               <div onClick={x => this.props.onBoardClick(0, 0)} className="col-md-4" style={cellStyle}>{this.props.data[0][0]}</div>
               <div onClick={x => this.props.onBoardClick(0, 1)} className="col-md-4" style={cellStyle}>{this.props.data[0][1]}</div>
               <div onClick={x => this.props.onBoardClick(0, 2)} className="col-md-4" style={cellStyle}>{this.props.data[0][2]}</div>
            </div>
            <div className="row">
               <div onClick={x => this.props.onBoardClick(1, 0)} className="col-md-4" style={cellStyle}>{this.props.data[1][0]}</div>
               <div onClick={x => this.props.onBoardClick(1, 1)} className="col-md-4" style={cellStyle}>{this.props.data[1][1]}</div>
               <div onClick={x => this.props.onBoardClick(1, 2)} className="col-md-4" style={cellStyle}>{this.props.data[1][2]}</div>
            </div>
            <div className="row">
               <div onClick={x => this.props.onBoardClick(2, 0)} className="col-md-4" style={cellStyle}>{this.props.data[2][0]}</div>
               <div onClick={x => this.props.onBoardClick(2, 1)} className="col-md-4" style={cellStyle}>{this.props.data[2][1]}</div>
               <div onClick={x => this.props.onBoardClick(2, 2)} className="col-md-4" style={cellStyle}>{this.props.data[2][2]}</div>
            </div>
         </div>
      );
   }
}

export default App;