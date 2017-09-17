'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
//const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false
    };
    this.reveal = this.reveal.bind(this);
    this.num = 0;
    this.character = [];
  }

  render() {
    fetch('https://swapi.co/api/people/').then((response) => {
      response.json().then((item) => {
        this.character = item.results;
      });
    });

    if (this.state.boolean) {
      this.list = [];
      this.list.push(
        <tr>
          <td>{this.character[this.num].name.toUpperCase()}</td>
          <td>{this.character[this.num].height}</td>
          <td>{this.character[this.num].mass}</td>
          <td>{this.character[this.num].hair_color.toUpperCase()}</td>
          <td>{this.character[this.num].skin_color.toUpperCase()}</td>
          <td>{this.character[this.num].eye_color.toUpperCase()}</td>
          <td>{this.character[this.num].birth_year}</td>
          <td>{this.character[this.num].gender.toUpperCase()}</td>
        </tr>
      );
    }

    return (
      <div className = 'container'>
        <img className = "logo" src="../img/Star-Wars-Logo.png"></img>
        <br></br>
        <img value = {"Luke Skywalker"} className = "img-circle" onClick ={this.reveal} src="../img/luke.jpg"></img>
        <img value = {"C-3PO"} className = "img-circle" onClick ={this.reveal} src="../img/C-3PO.jpg"></img>
        <img value = {"R2-D2"} className = "img-circle" onClick ={this.reveal} src="../img/r2d2.jpg"></img>
        <img value = {"Darth Vader"} className = "img-circle" onClick ={this.reveal} src="../img/darth-vader.jpg"></img>
        <img value = {"Leia Organa"} className = "img-circle" onClick ={this.reveal} src="../img/Leia.jpg"></img>
        <img value = {"Owen Lars"} className = "img-circle" onClick ={this.reveal} src="../img/Owen.jpg"></img>
        <img value = {"Beru Whitesun lars"} className = "img-circle" onClick ={this.reveal} src="../img/Beru.jpg"></img>
        <img value = {"R5-D4"} className = "img-circle" onClick ={this.reveal} src="../img/r5d4.jpg"></img>
        <img value = {"Biggs Darklighter"} className = "img-circle" onClick ={this.reveal} src="../img/biggs.jpeg"></img>
        <img value = {"Obi-Wan Kenobi"} className = "img-circle" onClick ={this.reveal} src="../img/Ben_Kenobi.png"></img>
        <table className = "table table-bordered">
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
          {this.list}
        </table>
        <h3>Click On Your Favorite Characters To Get Their Stats</h3>
      </div>
    );
  }

reveal (e) {
  const name = e.target.attributes[0].nodeValue;
  if (name) {
    this.setState({
      boolean: true
    });
  }

  if (name === "Luke Skywalker") {
    this.num = 0;
  }
  if (name === "C-3PO") {
    this.num = 1;
  }
  if (name === "R2-D2") {
    this.num = 2;
  }
  if (name === "Darth Vader") {
    this.num = 3;
  }
  if (name === "Leia Organa") {
    this.num = 4;
  }
  if (name === "Owen Lars") {
    this.num = 5;
  }
  if (name === "Beru Whitesun lars") {
    this.num = 6;
  }
  if (name === "R5-D4") {
    this.num = 7;
  }
  if (name === "Biggs Darklighter") {
    this.num = 8;
  }
  if (name === "Obi-Wan Kenobi") {
    this.num = 9;
  }
}
}
ReactDOM.render(<Fetch />, document.getElementById('fetch'));
