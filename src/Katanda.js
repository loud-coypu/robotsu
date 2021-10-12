import React from "react";

class Katanda extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Francesco"
        }
    }
    render(){
        return(
            <div>
                Wakanda foreva, {this.state.name}!!!
            </div>
        )
    }
}


export default Katanda;