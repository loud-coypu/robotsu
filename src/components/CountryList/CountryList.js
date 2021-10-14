import React from "react";

class Country extends React.Component{
    constructor(props){
        super();
        this.state = {stats: props.stats};
    }
    render(){
        return(
            <div>
                {
                    this.state.stats.map(country => <h1>{country.Country}</h1>)
                }
            </div>
            
        )
    }
}


export default Country;