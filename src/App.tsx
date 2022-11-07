import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const changeStartValue = (startValue: number) => {
        setMin(startValue)
        setCounter(startValue)
    }

    const changeMaxValue = (maxValue: number) => {
        setMax(maxValue)
    }

    /*const min = 0;
    const max = 5;*/

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

    const counterIncrements = () => {
        if (counter < max) {
            setCounter(counter + 1);
        }
        console.log(counter);
    }

    const counterResets = () => {
        setCounter(min);
        console.log(counter);
    }

    return (
        <div className="App">
            <Settings changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
            />
            <Counter counter={counter}
                     counterIncrements={counterIncrements}
                     counterResets={counterResets}
                     min={min}
                     max={max}
            />
        </div>
    );
}

export default App;
