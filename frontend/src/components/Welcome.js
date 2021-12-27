import React, {Component} from "react";

class Welcome extends Component{
    render() {
        const {name, lastName} = this.props
        return (
            <div>
                <h1>Welcome {name} {lastName}</h1>
            </div>
        )
    }
}

export default Welcome;