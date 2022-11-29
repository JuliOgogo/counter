import React, {ChangeEvent} from "react";
import s from './Settings.module.css';
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (maxValue: number) => void
    changeStartValue: (startValue: number) => void
    setSettings: () => void
    error: boolean
    isSetting: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          maxValue,
                                                          startValue,
                                                          changeMaxValue,
                                                          changeStartValue,
                                                          setSettings,
                                                          error,
                                                          isSetting
                                                      }) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        changeMaxValue(value)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        changeStartValue(value)
    }

    const onClickHandler = () => {
        setSettings()
    }

    return <div className={s.settingsWrapper}>
        <div className={s.inputs}>
            <SuperInput
                name={'max value:'}
                value={maxValue}
                callBack={onChangeMaxValueHandler}
                error={error && maxValue < startValue}
            />
            <SuperInput
                name={'start value:'}
                value={startValue}
                callBack={onChangeStartValueHandler}
                error={error}
            />
        </div>
        <div className={s.button}>
            <SuperButton
                name={'set'}
                callBack={onClickHandler}
                disabled={error || !isSetting}
            />
        </div>
    </div>
}