import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const [maxValue, setMaxValue] = useState<number>(() => {
        let valueAsString = localStorage.getItem("Max Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue;
        } else {
            return 5;
        }
    })

    useEffect(() => {
        localStorage.setItem("Max Value", JSON.stringify(maxValue))
    }, [maxValue])

    const [startValue, setStartValue] = useState<number>(() => {
        let valueAsString = localStorage.getItem("Start Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue;
        } else {
            return 0;
        }
    })

    useEffect(() => {
        localStorage.setItem("Start Value", JSON.stringify(startValue))
    }, [startValue])

    const [counter, setCounter] = useState(() => {
        let valueAsString = localStorage.getItem("Counter Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue;
        } else {
            return 0;
        }
    });

    useEffect(() => {
        localStorage.setItem("Counter Value", JSON.stringify(counter))
    }, [counter])

    const [displayText, setDisplayText] = useState<string>('enter values and press set')

    const [error, setError] = useState<boolean>(false)

    const changeStartValue = (startValue: number) => {
        if (startValue < 0 || startValue >= maxValue) {
            setDisplayText('Incorrect value!')
            setError(true)
        } else {
            setDisplayText('enter values and press set')
            setError(false)
            setStartValue(startValue)
        }
    }

    const changeMaxValue = (maxValue: number) => {
        if (maxValue < 0 || maxValue <= startValue) {
            setDisplayText('Incorrect value!')
            setError(true)
        } else {
            setDisplayText('enter values and press set')
            setError(false)
            setMaxValue(maxValue)
        }
    }

    const counterIncrements = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const counterResets = () => {
        setCounter(startValue)
    }

    const setSettings = () => {
        setDisplayText('')
        setCounter(startValue)
    }

    return <div className="App">
        <Settings
            maxValue={maxValue}
            startValue={startValue}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue}
            setSettings={setSettings}
            error={error}
        />
        <Counter
            counter={counter}
            maxValue={maxValue}
            startValue={startValue}
            counterIncrements={counterIncrements}
            counterResets={counterResets}
            displayText={displayText}
        />
    </div>
}

export default App;