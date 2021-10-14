import './App.css';
import Katanda from './Katanda';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      countries: []
    }
  }
  async componentDidMount(){
    const data = await fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?min_date=2021-10-13T00:00:00.000Z&max_date=2021-10-13T00:00:00.000Z')
    .then(response => response.json());

    const countries = data.map( e => {
      return {
        Id: e.uid,
        Country: e.combined_name
      };
    });

    this.setState({countries: countries});

  }
  render(){
    return (
      <div className="App">
        <h1>Countries</h1>
        <Katanda/>
        {
          this.state.countries.map(country => <h2 key={country.Id}>{country.Country}<br/>{country.Id}</h2>)
        }
        
      </div>
    );
  }
}

export default App;
