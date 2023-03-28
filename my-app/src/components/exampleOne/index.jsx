import React from "react";
import './style.scss'

class ExampleTwo extends React.Component {
state = {
    buttonname:'Click me',
    inputName: ''
};
constructor(props){
    super();
}
handleChange=(e) => {
    this.setState({inputName:e.target.value})
}
changeState = () =>{
    this.setState ({
        buttonname:this.state.inputName,
    });
};

  render(){
    const state = this.state;
    return (
        <>
      <label className="G-input" >
        <input name={'ButtonName'} 
        placeholder={'ButtonName'}
        value={this.state.inputName}
        onChange={this.handleChange}/>
      </label>
      <div>
        <button onClick={this.changeState}>{state.buttonname}
        </button>
      </div>
    
        </>
    )
  }
}
export default ExampleTwo
