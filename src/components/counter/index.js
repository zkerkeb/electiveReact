import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter