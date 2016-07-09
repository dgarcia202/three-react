import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         boardData: [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
         ]
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
         <div>
            <Board data={this.props.appState.boardData}/>
         </div>
      );
   }
}

class Board extends React.Component {
   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td>{this.props.data[0][0]}</td><td>{this.props.data[0][1]}</td><td>{this.props.data[0][2]}</td>
               </tr>
               <tr>
                  <td>{this.props.data[1][0]}</td><td>{this.props.data[1][1]}</td><td>{this.props.data[1][2]}</td>
               </tr>
               <tr>
                  <td>{this.props.data[2][0]}</td><td>{this.props.data[2][1]}</td><td>{this.props.data[2][2]}</td>
               </tr>
            </tbody>
         </table>
      );
   }
}

export default App;