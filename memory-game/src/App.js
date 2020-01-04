import React, { Component } from "react";
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import fionas from '../src/fionas.json';

class App extends Component {
  state = {
    fionas
  };

  // check if inside past selection
  handleCardClick = (e) => {
    e.preventDefault();
    console.log("Fiona was clicked");
    // call correct / incorrect
  }

  correct = () =>{
    // score up
    // msg change
    // call shuffle
  }

  incorrect = () =>{
    // msg change
    // call shuffle
  }
  shuffle = () => {
    // rearage cards
    // set to state
  }

  //Displays components on the page
  render() {
    return (
      <Container>
      <Jumbotron/>
      {this.state.fionas.map(fiona =>( 
      <MemoryCard
        handleCardClick={this.handleCardClick}
        id={fiona.id}
        image={fiona.image}
        alt={fiona.alt}
      /> ))}
      </Container>
    )
  }
}

export default App;
