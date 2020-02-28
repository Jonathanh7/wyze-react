import React, { Component } from "react";
import { randomAdvice } from '../services/Constants'


class Random extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counsel: "",
    };
  }
   async handleClick() {
     const inspired = await randomAdvice()
     console.log(inspired)
     this.setState({
       counsel: inspired.data.slip.advice 
     })

     }
   

  componentDidMount = async () => {
    this.handleClick()
    }


  render() {
    
    return (
      <div>
        <h1>Random Advice</h1>
        <button onClick={this.handleClick}>Click For Random Wisedom</button>
        <p className="answer">{this.state.counsel}</p>
      </div>
    );
  }
}


export default Random;
