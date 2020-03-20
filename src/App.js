import React, { Component } from 'react';
import './App.css';
import StarWars from './components/starwars';
import axios from 'axios';
import styled from 'styled-components';

// styled components
const Card = styled.div`
  text-align: center;
`;
const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

// class is my component
class App extends Component {
  //these are the values that are tied to the component
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  // when component loads it does everything thats inside
  componentDidMount() {
    // git request for a url
    axios
      .get('https://swapi.co/api/people/')
      // promise chain it grabs the response and then sets the data to component state
      .then(res => {
        this.setState({ starwarsChars: res.data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  // render grabs all the components to the html
  render() {
    return (
      <Card>
        <Header>React Wars</Header>
        <StarWars chars={this.state.starwarsChars} />
      </Card>
    );
  }
}

export default App;
