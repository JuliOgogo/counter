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

    const changeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setCounter(startValue)
    }

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }

    const counterIncrements = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    const counterResets = () => {
        setCounter(startValue);
    }

    return <div className="App">
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
            />
            <Counter
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}
                counterIncrements={counterIncrements}
                counterResets={counterResets}
            />
        </div>
}

export default App;