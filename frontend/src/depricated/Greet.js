import React from "react";

/*function Greet(){
    return <h1>Hello Tino</h1>
}*/

const Greet = props => {
    const {name, lastName} = props
    return (
        <div>
            <h1>Hello {name} {lastName}</h1>
        </div>
            )
}

export default Greet;