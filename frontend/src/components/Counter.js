import React, {Component} from "react";

class Counter extends Component{

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return(
            <div>
                <h1> Count {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
                <br/>
                <button onClick={()=>this.resetCount()}>Reset</button>
            </div>
        )
    }

    incrementCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    resetCount() {
        this.setState({
            count: 0
        })
    }

    incrementFive() {
        for (let i = 0; i < 5; i++) {
            this.incrementCount()
        }
    }
}

export default Counter