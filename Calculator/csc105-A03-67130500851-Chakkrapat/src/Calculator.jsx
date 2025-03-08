import React, { useState } from 'react';

function SimpleCalculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');

    const handleInput = (e) => setInput(e.target.value);

    const calculate = (op) => {
        const num = parseFloat(input);
        if (isNaN(num)) return;
        switch (op) {
            case '+': setResult(result + num); break;
            case '-': setResult(result - num); break;
            case '*': setResult(result * num); break;
            case '/':
                if (num === 0) { alert("Cannot divide by zero!"); return; }
                setResult(result / num); break;
            default: break;
        }
        setInput('');
    };

    return (
        <div style={{
            textAlign: 'center',
            fontFamily: 'sans-serif',
            border: '2px solid black',
            marginLeft: '35rem',

        }}>
            <h1>Simple Calculator</h1>
            <p>Result: {result}</p>
            <input type="number" value={input} onChange={handleInput} placeholder="Enter a number" />
            <br />
            <button onClick={() => calculate('+')}>Add</button>
            <button onClick={() => calculate('-')}>Substract</button>
            <button onClick={() => calculate('*')}>Multiply</button>
            <button onClick={() => calculate('/')}>Divide</button>
            <br />
            <button onClick={() => setInput('')}>Reset Input</button>
            <button onClick={() => setResult(0)}>Reset Result</button>
        </div>
    );
}

export default SimpleCalculator;