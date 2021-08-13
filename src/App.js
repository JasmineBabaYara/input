import React, { Component } from 'react' 

class App extends Component{
  constructor(){
    super()
    this.state={
      text:''
    }
    this.textChange =this.textChange.bind(this)
  }
  textChange(e){
    this.setState({
      [e.target.name]:e.target.value
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
        <p>{this.state.text}</p>
      </div>
    )
  }
}


export default App;