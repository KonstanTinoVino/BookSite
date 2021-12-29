import React from "react";

const Hello = () => {
/*    return (
        <div>
            <h1>Hello Tino</h1>
        </div>
    )*/

    return  React.createElement('div', {id: '1'}, React.createElement('h2', null, "Hello Tino"))
}

export default Hello;