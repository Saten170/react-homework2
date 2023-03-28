import React from "react";
import './style.scss'

class ExampleTree extends React.Component {
    state = {
      input1Value:'',
      input2Value:'',
      result:'',
      fontsize:''
    };
    constructor(props){
        super();
    }
   
    TextSize = () =>{
        this.setState ({
            result:this.state.input1Value,
            fontsize:this.state.input2Value
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
          <p style={{fontSize:this.state.fontsize+'px'}}>

            {this.state.result}
          </p>
          <div>
            <button onClick={this.TextSize}>Click me</button>
          </div>
        
            </>
        )
      }
    }
    export default ExampleTree
    