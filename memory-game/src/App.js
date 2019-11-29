import React, { Component } from "react";
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import fionas from './fionas.json';

class App extends Component {

  //Displays components on the page
  render() {
    return (
      <Container>
      <Jumbotron></Jumbotron>
      <MemoryCard></MemoryCard>
      </Container>
    )
  }
}

export default App;
