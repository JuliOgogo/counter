import React from 'react';
import s from "./Counter.module.css";

type DisplayPropsType = {
    min: number
    max: number
    counter: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={props.counter === props.max ?
            `${s.error} ${s.number}` : s.number}>
            <h2>{props.counter}</h2>
        </div>
    );
}