import React, { Component } from "react";
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import fionas from '../src/fionas.json';

class App extends Component {
  state = {
    fionas
  };

  //Displays components on the page
  render() {
    return (
      <Container>
      <Jumbotron/>
      {this.state.fionas.map(fiona =>( 
      <MemoryCard
        id={fiona.id}
        image={fiona.image}
        alt={fiona.alt}
      /> ))}
      </Container>
    )
  }
}

export default App;
