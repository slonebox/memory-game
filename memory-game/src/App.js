import React, { Component } from "react";
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import fionas from '../src/fionas.json';

class App extends Component {

  //Displays components on the page
  render() {
    return (
      <Container>
      <Jumbotron/>
      <MemoryCard
        id={fionas[0].id}
        image={fionas[0].image}
        alt={fionas[0].alt}
      />
      </Container>
    )
  }
}

export default App;
