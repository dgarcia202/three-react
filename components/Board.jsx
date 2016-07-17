import React from 'react';

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

export default Board;