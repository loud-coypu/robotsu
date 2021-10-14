import React from "react";
import Country from '../Country/Country';
import './countrylist.css';


class CountryList extends React.Component{
    render(){
        return(
            <div className="countries">
                {
                    this.props.stats.map(country => <Country key={country.Id} stats={country}/>)
                }
            </div>
            
        )
    }
}


export default CountryList;