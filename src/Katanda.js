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
                <button onClick={() => this.setState({name: this.state.name === "Guido"?'Michael':"Guido"})}>Change name</button>
                <button className="square" onClick={() => console.log('click')}>Katanda me</button>
            </div>
            
        )
    }
}


export default Katanda;