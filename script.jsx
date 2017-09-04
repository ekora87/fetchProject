'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  render() {
    fetch('http://services.groupkt.com/country/get/all').then((response) => {
      response.json().then((data) => {
        const countries = data.RestResponse.result;
        this.setState({countries});
      });
    });

    return (
      <div>
        <h1>Address Book</h1>
        <table className = "table table-bordered">
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Alpha2 Code</th>
            <th>Alpha3 Code</th>
          </tr>
          {this.state.countries.map((place, index) => (
            <tr key={index}>
              <td className='number'>{index}</td>
              <td>{place.name}</td>
              <td>{place.alpha2_code}</td>
              <td>{place.alpha3_code}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
ReactDOM.render(<Fetch />, document.getElementById('fetch'));
