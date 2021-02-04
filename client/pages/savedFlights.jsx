import React from 'react';



export default class Savedflights extends React.Component{
constructor(props){
  super(props);
}

  testing(){
    fetch('api/flight')
    .then(res=>res.json())
    .then(result=>console.log(result))
  }

  render(){
    return <div>{this.testing()}</div>
  }
}
