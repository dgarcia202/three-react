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
   }

   render() {
      return (
         <div>
            <Header/>
            <Content appState={this.state}/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Three in a row</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-8">
                  <Board data={this.props.appState.boardData} currentPlayer={this.props.appState.currentPlayer} />
               </div>
               <div className="col-md-4">
               </div>               
            </div>
         </div>
      );
   }
}

class Board extends React.Component {
   
   constructor(props) {
      super(props);

      this.processBoardClick = this.processBoardClick.bind(this);
   }

   processBoardClick(x, y) {
         this.props.boardData[x][y] = this.props.currentPlayer == 0 ? 'X' : 'O';
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
               <div onClick={x => this.processBoardClick(0, 0)} className="col-md-4" style={cellStyle}>{this.props.data[0][0]}</div>
               <div onClick={x => this.processBoardClick(0, 1)} className="col-md-4" style={cellStyle}>{this.props.data[0][1]}</div>
               <div onClick={x => this.processBoardClick(0, 2)} className="col-md-4" style={cellStyle}>{this.props.data[0][2]}</div>
            </div>
            <div className="row">
               <div onClick={x => this.processBoardClick(1, 0)} className="col-md-4" style={cellStyle}>{this.props.data[1][0]}</div>
               <div onClick={x => this.processBoardClick(1, 1)} className="col-md-4" style={cellStyle}>{this.props.data[1][1]}</div>
               <div onClick={x => this.processBoardClick(1, 2)} className="col-md-4" style={cellStyle}>{this.props.data[1][2]}</div>
            </div>
            <div className="row">
               <div onClick={x => this.processBoardClick(2, 0)} className="col-md-4" style={cellStyle}>{this.props.data[2][0]}</div>
               <div onClick={x => this.processBoardClick(2, 0)} className="col-md-4" style={cellStyle}>{this.props.data[2][1]}</div>
               <div onClick={x => this.processBoardClick(2, 0)} className="col-md-4" style={cellStyle}>{this.props.data[2][2]}</div>
            </div>
         </div>
      );
   }
}

export default App;