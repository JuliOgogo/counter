import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const getValueLS = (key: string, defValue: number): number => {
        let valueAsString = localStorage.getItem(key)
        return valueAsString ? JSON.parse(valueAsString) : defValue
    }

    const [maxValue, setMaxValue] = useState<number>(() => {
        return getValueLS("Max Value", 5)
    })

    useEffect(() => {
        localStorage.setItem("Max Value", JSON.stringify(maxValue))
    }, [maxValue])

    const [startValue, setStartValue] = useState<number>(() => {
        return getValueLS("Start Value", 0)
    })

    useEffect(() => {
        localStorage.setItem("Start Value", JSON.stringify(startValue))
    }, [startValue])

    const [counter, setCounter] = useState(() => {
        return getValueLS("Counter Value", 0)
    })

    useEffect(() => {
        localStorage.setItem("Counter Value", JSON.stringify(counter))
    }, [counter])

    const [displayText, setDisplayText] = useState<string>('enter values and press set')
    const [error, setError] = useState<boolean>(false)
    const [isSetting, setIsSetting] = useState<boolean>(false)

    const changeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setIsSetting(true)
        if (startValue < 0 || startValue >= maxValue) {
            setDisplayText('Incorrect value!')
            setError(true)
        } else {
            setDisplayText('enter values and press set')
            setError(false)
        }
    }

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setIsSetting(true)
        if (maxValue < 0 || maxValue <= startValue) {
            setDisplayText('Incorrect value!')
            setError(true)
        } else {
            setDisplayText('enter values and press set')
            setError(false)
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
        setIsSetting(false)
    }

    return <div className="App">
        <Settings
            maxValue={maxValue}
            startValue={startValue}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue}
            setSettings={setSettings}
            error={error}
            isSetting={isSetting}
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