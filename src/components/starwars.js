import React, { Component } from 'react';
import './starwars.css';
import styled from 'styled-components';

// styled components
const Character = styled.div`
  border: 1px dashed black;
  box-sizing: border-box;
  max-width: 80%;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(18, 105, 235, 0.2);
`;
const AboutMe = styled.section`
  width: 49%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.4);
`;
const AboutMeSize = styled.section`
  margin: 0;
  font-size: 150%;
`;
// class is my component
class StarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Characters: this.props.chars
    };
  }
  // when component loads it does everything thats inside
  componentDidMount() {
    this.setState({ Characters: this.props.chars });
  }
  // render grabs all the components to the html
  render() {
    console.log(this.props.chars);
    return (
      // .map is creating a new array and filling it with the data im selecting by using aCharacter
      <div>
        {this.props.chars.map(aCharacter => (
          <Character>
            <AboutMe>
              <AboutMeSize>About Me</AboutMeSize>
              <div className="AboutMeInfo">
                <div>
                  <b>Name:</b> {aCharacter.name}
                </div>
                <div>
                  <b>Birth Year:</b> {aCharacter.birth_year}
                </div>
                <div>
                  <b>Height:</b> {aCharacter.height} cm
                </div>
                <div>
                  <b>Mass:</b> {aCharacter.mass} kg
                </div>
                <div>
                  <b>Gender:</b> {aCharacter.gender}
                </div>
                <div>
                  <b>Hair Color:</b> {aCharacter.hair_color}
                </div>
                <div>
                  <b>Eye Color:</b> {aCharacter.eye_color}
                </div>
                <div>
                  <b>Skin Color:</b> {aCharacter.skin_color}
                </div>
              </div>
            </AboutMe>
            <section className="BTS">
              <h4>BTS</h4>
              <div className="BTSInfo">
                <div>
                  <b>Created:</b> {aCharacter.created}
                </div>
                <div>
                  <b>Edited:</b> {aCharacter.edited}
                </div>
                <div>
                  <b># of Films:</b> {aCharacter.films.length}
                </div>
              </div>
            </section>
          </Character>
        ))}
      </div>
    );
  }
}

export default StarWars;
