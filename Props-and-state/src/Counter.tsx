import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Counter: {count}</h1>
            <button
                onClick={increment}
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
                Increment
            </button>
            <button
                onClick={decrement}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
