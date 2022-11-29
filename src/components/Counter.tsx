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
    displayText: string
}

export const Counter = (props: CounterPropsType) => {

    const onClickIncHandler = () => {
        props.counterIncrements();
    }

    const onClickResetHandler = () => {
        props.counterResets();
    }

    const disabled = props.counter === props.maxValue || props.displayText === 'Incorrect value!'

    return <div className={s.counterWrapper}>
        <Display
            maxValue={props.maxValue}
            counter={props.counter}
            displayText={props.displayText}
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
                disabled={props.displayText === 'Incorrect value!'}
            />
        </div>
    </div>
}