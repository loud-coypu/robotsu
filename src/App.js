import './App.css';
import CountryList from './components/CountryList/CountryList';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      countries: [],
      stats: []
    }
  }
  async componentDidMount(){
    const listUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?min_date=2021-10-13T00:00:00.000Z&max_date=2021-10-13T00:00:00.000Z&hide_fields=_id,combined_name,country_iso2,country_iso3,loc,state,country_code,confirmed_daily,date,deaths_daily,recovered_daily,confirmed,deaths,population,recovered';
    const detailUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?min_date=2021-10-13T00:00:00.000Z&max_date=2021-10-13T00:00:00.000Z&hide_fields=_id,combined_name,country_iso2,country_iso3,loc,state,country_code,confirmed_daily,date,deaths_daily,recovered_daily&uid=';
        
    const response = await fetch(listUrl)
    const data = await response.json();
    const countries = Object.values(data.reduce( (r, a)  => {
      r[a.country] = r[a.country] || a.uid;
      return r;
    }, {}));

    this.setState({countries});

    this.state.countries.forEach(async e => {
      const response = await fetch(detailUrl + e)
      const data = await response.json();
      if (data.length)
      {
        const row = data[0];
        const country = {
          Id: row.uid,
          Country: row.country,
          Deaths : row.deaths,
          Recovered : row.recovered,
          Confirmed : row.confirmed
        };
        this.setState(prevState => (
            {stats: prevState.stats.concat(country)}
          ));
      }
    });
  }
  render(){
    return (
      <div className="App">
        <h1>Countries</h1>
        <CountryList stats={this.state.stats}/>
      </div>
    );
  }
}

export default App;
