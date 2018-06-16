import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let setImages =[];
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:8081/getImages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json()).then(res => {
        this.setState({data:res});
    }).catch(err => err);
  }
  render() {
    let rows_cols = Math.sqrt(this.state.data.length); 
    // let firstImage = imageSet1[0].src;
    //    for(let i=0;i<=rows_cols;i++){
    //     rows_cols=rows_cols[i];
    //     for (var j in rows_cols ){
    //         return(
    //           <div className="row">  
    //              <div className="column">
    //               {rows_cols[j]}
    //              </div>
    //           </div>
    //         );
    //       }
    //     }
    let path = "http://localhost:8081/images/2.png";
    return (

      <div className="App">
         <div className ="grid">
             <img src={path} className="App-logo" alt="logo" />
         </div>
     </div>
  )}
}

export default App;
