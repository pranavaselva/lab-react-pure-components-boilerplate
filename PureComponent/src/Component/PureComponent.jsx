import React, { PureComponent } from "react";

class PureComponents extends PureComponent{
    constructor(){
        super()

        this.state={
            count:0,
            toggle:false,
        }
    }

    handleClickCount = () => {
        if(this.state.toggle == true){
            this.setState({...this.state, count: this.state.count+1})
        }
    };

    handleClickToggle = () => {
        this.setState({...this.state,toggle:!this.state.toggle})
    }

    render(){
        return <div>
            <h1>Pure Component</h1>
            {this.state.count}
            <button onClick={this.handleClickToggle}>Toggle</button>
            <button onClick={this.handleClickCount}>Count</button>
        </div>
    }
}

export default PureComponents;