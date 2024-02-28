import  { PureComponent } from "react";

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
        console.log(!this.state.toggle)
    }

    render(){
        console.log('This is pure component')
        return <div>
            <h1>Pure Component</h1>
            <h2>{this.state.count}</h2>
            
            <button onClick={this.handleClickToggle}>Toggle</button>
            <button onClick={this.handleClickCount}>Count</button>
        </div>
    }
}

export default PureComponents;