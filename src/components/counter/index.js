import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(10);
    const [countTwo, setCountTwo] = useState(10);

    useEffect(() => {
        console.log('useEffect', count);
        document.title = `Vous avez cliqué ${count} fois`;
        // alert('Bravo, vous avez cliqué sur le bouton ' + count + ' fois');
    }, [count])

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{countTwo}</h1>
            <div>
                <button onClick={() => setCountTwo(count - 1)}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter