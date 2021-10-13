import './App.css';
import Katanda from './Katanda';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      countries: [], stats: []
    }
  }
  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries');
    const countries = await resp.json();

    this.setState({countries: countries});
    const stats = countries.map(c => 66);
    this.setState({stats: stats});
  }
  render(){
    return (
      <div className="App">
        <h1>Countries</h1>
        {
          this.state.stats.map(country => <h2>{country}</h2>)
        }
        
      </div>
    );
  }
}

export default App;
