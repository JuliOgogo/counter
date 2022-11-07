import s from './Settings.module.css';
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";

type SettingsPropsType = {
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const [maxValue, setMaxValue] = useState<number>(() => {
        let valueAsString = localStorage.getItem("Max Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            return newValue;
        } else {
            return 0;
        }
    })

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
        localStorage.setItem("Max Value", JSON.stringify(maxValue))
    }, [maxValue])

    /*useEffect(() => {
        let valueAsString = localStorage.getItem("Max Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])*/

    useEffect(() => {
        localStorage.setItem("Start Value", JSON.stringify(startValue))
    }, [startValue])

    /*useEffect(() => {
        let valueAsString = localStorage.getItem("Start Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])*/

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.changeStartValue(startValue)
        props.changeMaxValue(maxValue)
    }

    return (
        <div className={s.settingsDisplay}>
            <div className={s.inputs}>
                <div className={s.inputItem}>
                    <h3>max value:</h3>
                    <input value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.inputItem}>
                    <h3>start value:</h3>
                    <input value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
            </div>
            <div className={s.buttonItem}>
                <Button name={'set'}
                        callBack={onClickHandler}
                        disabled={false}/>
            </div>
        </div>
    );
}

// второй урок по localStorage
/*type SettingsPropsType = {}

export const Settings = (props: SettingsPropsType) => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        localStorage.setItem("Counter Value", JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let valueAsString = localStorage.getItem("Counter Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className={s.settingsDisplay}>
            <h2>{value}</h2>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}*/


// урок по localStorage
/*type SettingsPropsType = {}

export const Settings = (props: SettingsPropsType) => {

    let [value, setValue] = useState(0)

    useEffect(() => {
        setToLocalStorageHandler()
    }, [value])
    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem("Counter Value", JSON.stringify(value))
        localStorage.setItem("Counter Value + 1", JSON.stringify(value + 1))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("Counter Value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeHandler = () => {
        localStorage.removeItem("Counter Value + 1")
    }

    return (
        <div className={s.settingsDisplay}>
            <h2>{value}</h2>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearHandler}>clear</button>
            <button onClick={removeHandler}>remove</button>
        </div>
    );
}*/