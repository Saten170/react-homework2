import React from "react";
import './style.scss'

class ExampleFour extends React.Component {
     state = {
        color:''
    };
    constructor(props){
        super();
    }
    generateRandomColor =() => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const background ="rgb(" + red + ", " + green + "," + blue + ")";
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
    