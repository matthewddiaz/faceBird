import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//not that post is the name of the Component and body is like an argument passed to the Component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentMessage: '',
      messages: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Facebird</h2>
        </div>
        <textarea onChange={(event) => this.setState({currentMessage: event.target.value})}
          value={this.state.currentMessage}
        />
        <span
          style={{
            color: this.state.currentMessage.length > 140 ? 'red' : 'green'
          }}>
          {140 - this.state.currentMessage.length}</span>
        <button onClick={()=>
          this.setState({
            messages: [...this.state.messages, this.state.currentMessage],
            currentMessage: ''
          })
        }
        disabled={this.state.currentMessage.length === 0 || this.state.currentMessage.length > 140}
        >
          Submit
        </button>
        {
            this.state.messages.map((message, index) =>
              <Post key={index} body={message}/>
            )
        }
      </div>
    );
  }
}

class Post extends Component {
  //all Components need the render method
  render(){
    return (
      <p>:{this.props.body} <LikeButton/></p>
    );
  }
}

class LikeButton extends Component{
  constructor(props){
      super(props);
      this.state = {liked: false};
  }

  render(){
    return (
      <a href='#' onClick={() => this.setState({liked: !this.state.liked})}>
        {this.state.liked ? 'unlike' : 'like'} </a>
    );
  }
}

export default App;
