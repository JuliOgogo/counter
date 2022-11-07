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
}

export const Counter = (props: CounterPropsType) => {

    const onClickIncHandler = () => {
        props.counterIncrements();
    }

    const onClickResetHandler = () => {
        props.counterResets();
    }

    return (
        <div className={s.counter}>

            <Display
                min={props.startValue}
                max={props.maxValue}
                counter={props.counter}
            />

            <div className={s.buttons}>
                <SuperButton
                    name={'inc'}
                    callBack={onClickIncHandler}
                    disabled={props.counter === props.maxValue}
                />
                <SuperButton
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={props.counter === props.startValue}
                />
            </div>
        </div>
    );
}