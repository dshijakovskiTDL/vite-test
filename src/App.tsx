import React, { useState } from 'react'
import { PROCESS_PROJECT } from 'utils/constants'

function App() {
    const [count, setCount] = useState(0)

    console.log(PROCESS_PROJECT)

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        </div>
    )
}

export default App
