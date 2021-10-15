import './App.css';
import Sersbox from './components/Sersbox/Sersbox';
import CountryList from './components/CountryList/CountryList';
import React from 'react';
import _ from 'lodash'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount(){
    const listUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?min_date=2021-10-13T00:00:00.000Z&max_date=2021-10-13T00:00:00.000Z&hide_fields=_id,combined_name,country_iso2,country_iso3,loc,state,country_code,confirmed_daily,date,deaths_daily,recovered_daily,confirmed,deaths,recovered';
    const detailUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?min_date=2021-10-13T00:00:00.000Z&max_date=2021-10-13T00:00:00.000Z&hide_fields=_id,combined_name,country_iso3,loc,state,country_code,confirmed_daily,date,deaths_daily,recovered_daily&uid=';
        
    const response = await fetch(listUrl)
    const data = await response.json();
    const countries = Object.values(_.orderBy(data, [c => c.population], ['desc']).reduce( (r, a)  => {
      r[a.country] = r[a.country] || a.uid;
      return r;
    }, {}));

    this.setState({countries});

    this.state.countries.forEach(async e => {
      const response = await fetch(detailUrl + e);
      const data = await response.json();
      if (data.length)
      {
        const row = data[0];
        const country = {
          Id: row.uid,
          Code: row.country_iso2 ? row.country_iso2.toLowerCase() : "zz",
          Country: row.country,
          Deaths : row.deaths,
          Recovered : row.recovered,
          Confirmed : row.confirmed,
          Population: row.population
        };
        this.setState(prevState => (
            {stats: prevState.stats.concat(country)}
          ));
      }
    });
  }
  handleChange(e){
    this.setState({searchField: e.target.value})
  }
  
  render(){
    const {stats, searchField} = this.state;
    const filteredCountries = stats.filter(c => c.Country.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Countries</h1>
        <Sersbox placeholder="Enter country name" handleChange={this.handleChange}/>
        <CountryList stats={filteredCountries}/>
      </div>
    );
  }
}

export default App;
