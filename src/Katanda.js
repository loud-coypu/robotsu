import React from "react";

class Katanda extends React.Component{
    constructor(){
        super();
        this.katuni = React.createRef();
        this.state = {
            name:"Francesco"
        }
    }
    render(){
        return(
            <div ref={this.katuni}>
                <p>
                Wakanda foreva, {this.state.name}!!!
                </p>
                <button onClick={() => this.setState({name: 'Michael'})}>Change name</button>
            </div>
            
        )
    }
}


export default Katanda;