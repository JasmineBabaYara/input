import React, { Component } from 'react' 

class App extends Component{
  constructor(){
    super()
    this.state={
      text:'',
      Arr:[]//array
    }
    this.textChange =this.textChange.bind(this);
    this.buttonClick =this.buttonClick.bind(this)
  }
  textChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  buttonClick(){
    this.setState({
      Arr:[...this.state.Arr,this.state.text]
    })
  }
  render(){
    return(
      <div>
        <input 
          className='textinput'
          type='text'
          name='text'
          value={this.state.text}
          onChange={this.textChange}
        />
        <button 
          onClick={this.buttonClick}
        >Add</button>
        
        {this.state.Arr.map((item) =>{
          return(
          <h3>{item}</h3>
          ) 
        })}
      </div>
    )
  }
}


export default App;