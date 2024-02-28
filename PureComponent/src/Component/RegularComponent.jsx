import  {  Component } from "react";

class RegularComponent extends Component{
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
        this.setState({...this.state, toggle:!this.state.toggle})
        console.log(!this.state.toggle)
    }

    render(){
        console.log('this is regular component')
        return <div>
            <h1>Regular Component</h1>
            <h2>{this.state.count}</h2>
            
            <button onClick={this.handleClickToggle}>Toggle</button>
            <button onClick={this.handleClickCount}>Count</button>
        </div>
    }
}

export default RegularComponent;