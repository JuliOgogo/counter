import React, {ChangeEvent} from "react";
import s from './Settings.module.css';
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (maxValue: number) => void
    changeStartValue: (startValue: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          maxValue,
                                                          startValue,
                                                          changeMaxValue,
                                                          changeStartValue
                                                      }) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        if (value === startValue) {
            throw new Error('Error')
        } else {
            changeMaxValue(value)
        }
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        if (value >= 0) {
            changeStartValue(value)
        } else {
            throw new Error('Error')
        }
    }

    const onClickHandler = () => {
        changeStartValue(startValue)
        changeMaxValue(maxValue)
    }

    return <div className={s.settingsDisplay}>
        <div className={s.inputs}>
            <SuperInput
                name={'max value'}
                value={maxValue}
                type={'number'}
                callBack={onChangeMaxValueHandler}
            />
            <SuperInput
                name={'start value'}
                value={startValue}
                type={'number'}
                callBack={onChangeStartValueHandler}
            />
        </div>
        <div className={s.button}>
            <SuperButton
                name={'set'}
                callBack={onClickHandler}
                disabled={false}
            />
        </div>
    </div>
}