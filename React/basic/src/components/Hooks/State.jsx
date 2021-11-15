import React, { useState } from 'react'

function State() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    return (
        <div>
            Count: {count}
            <br />
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(next => next + 1)}>+</button>
        </div>
    )
}

export default State
