import React from 'react';

class GameInfo extends React.Component {
   
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <h2>{this.props.playerName}<small> now playing</small></h2>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <button type="button" className="btn btn-primary">Reset Game</button>
               </div>
            </div>            
         </div>         
      );
   }
}

export default GameInfo;