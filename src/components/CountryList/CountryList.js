import React from "react";
import Country from '../Country/Country';



class CountryList extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.stats.map(country => <Country key={country.Id} stats={country}/>)
                }
            </div>
            
        )
    }
}


export default CountryList;