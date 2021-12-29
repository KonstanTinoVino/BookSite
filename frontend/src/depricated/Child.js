import React from 'react';

function Child(props) {
    let flag = true
    const {greetHandler} = props
    let message = flag ? 'child': 'stepChild'
    return(
        <div>
            <button onClick={() => greetHandler(message)}>Greet Parent</button>
        </div>
    )
}

export default Child;