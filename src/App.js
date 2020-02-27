import React from "react";
import "./App.css";
import Header from "./components/Header";
import { randomAdvice } from "./services/Constants";
import { Route, Link } from "react-router-dom";
import Container from "./Container";
import Particles from "react-particles-js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Particles
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: false
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "bottom",
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  }
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0.5
                  },
                  repulse: {
                    distance: 400,
                    duration: 4
                  }
                }
              }
            }}
          />
          <Container />
        </main>
      </div>
    );
  }
}
export default App;
