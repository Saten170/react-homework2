import React from "react";
import './style.scss'

class ExampleFour extends React.Component {
     state = {
        color:'white'
    };
    constructor(props){
        super();
    }
    generateRandomColor =() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const background ="rgb(" + red + ", " + green + ", " + blue + ")";
        this.setState({color:background});
      };
    render(){
        return (
            <>
          
          <div style={{width:'300px',height:'600px',backgroundColor:this.state.color}}>
            <button onClick={this.generateRandomColor}>Click me</button>
          </div>
        
            </>
        )
      }
    }
    export default ExampleFour
    