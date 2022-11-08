import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "./SuperButton";
import {Display} from "./Display";

type CounterPropsType = {
    counter: number
    maxValue: number
    startValue: number
    counterIncrements: () => void
    counterResets: () => void
    error: string
}

export const Counter = (props: CounterPropsType) => {

    const onClickIncHandler = () => {
        props.counterIncrements();
    }

    const onClickResetHandler = () => {
        props.counterResets();
    }

    const disabled = props.counter === props.maxValue || props.error === 'Incorrect value!'

    return <div className={s.counterWrapper}>
        <Display
            startValue={props.startValue}
            maxValue={props.maxValue}
            counter={props.counter}
            error={props.error}
        />
        <div className={s.buttons}>
            <SuperButton
                name={'inc'}
                callBack={onClickIncHandler}
                disabled={disabled}
            />
            <SuperButton
                name={'reset'}
                callBack={onClickResetHandler}
                disabled={props.error === 'Incorrect value!'}
            />
        </div>
    </div>
}