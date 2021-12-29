import React, {Component} from "react";

class  EventBind extends Component{

    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.changeCount = this.changeCount.bind(this)
    }

    render() {
        return(
            <div>
                <p>Number {this.state.count}</p>
                <button onClick={this.changeCount}>Change Number</button>
            </div>
        )
    }

    changeCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
}

export default EventBind

