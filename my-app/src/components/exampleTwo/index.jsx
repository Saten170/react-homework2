import React from "react";
import './style.scss'

class ExampleTwo extends React.Component {
    state = {
      input1Value:'',
      input2Value:'',
      result:''
    };
    constructor(props){
        super();
    }
   
    MultiState = () =>{
        this.setState ({
            result:(+this.state.input1Value)*(+this.state.input2Value),
        });
    };
    
      render(){
        return (
            <>
          <label className="G-input" >
            <input name={'ButtonName'} 
            placeholder={'ButtonName'}
            value={this.state.input1Value}
            onChange={(e)=>this.setState({input1Value:e.target.value})}/>
          </label>
          <label className="G-input" >
            <input name={'ButtonName'} 
            placeholder={'ButtonName'}
            value={this.state.input2Value}
            onChange={(e)=>this.setState({input2Value:e.target.value})}/>
          </label>
          <p>
            {this.state.result}
          </p>
          <div>
            <button onClick={this.MultiState}>Click me</button>
          </div>
        
            </>
        )
      }
    }
    export default ExampleTwo
    