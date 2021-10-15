import React from "react";


class Sersbox extends React.Component{
    render(){
        return(
            <input type="search" className="search" placeholder={this.props.placeholder} onChange={this.props.handleChange}/>
        )
    }
}

export default Sersbox;