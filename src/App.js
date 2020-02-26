import React from 'react';
import './App.css';
import Header from './components/Header'
import { randomAdvice } from './services/Constants'
import { Route, Link } from 'react-router-dom';
import Container from './Container'

class App extends React.Component {
  constructor() {
    super()
    this.state = ({
      word: []
    })
  }
 


  render() {
    return (
      <div className="App">
        <Header />
        <main>
      <Container />
        </main>
      </div>
    );
  }
}
export default App;
