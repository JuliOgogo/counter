import React from 'react';
import s from "./Display.module.css";

type DisplayPropsType = {
    startValue: number
    maxValue: number
    counter: number
    error: string
}

export const Display: React.FC<DisplayPropsType> = ({
                                                        startValue,
                                                        maxValue,
                                                        counter,
                                                        error
                                                    }) => {

    const finalCounterClassName = s.number + (counter === maxValue ? ' ' + s.error : '')

    const finalErrorText = s.text + (error === 'Incorrect value!' ? ' ' + s.error : '')

    return <div className={s.displayWrapper}>

        {error === 'Incorrect value!' ? <div className={finalErrorText}>{error}</div> :
            error === 'enter values and press set' ? <div className={finalErrorText}>{error}</div> :
                <div className={finalCounterClassName}>{counter}</div>}

    </div>
}