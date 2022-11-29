import React from 'react';
import s from "./Display.module.css";

type DisplayPropsType = {
    maxValue: number
    counter: number
    displayText: string
}

export const Display: React.FC<DisplayPropsType> = ({
                                                        maxValue,
                                                        counter,
                                                        displayText
                                                    }) => {

    const finalCounterClassName = s.number + (counter === maxValue ? ' ' + s.error : '')

    const finalDisplayTextClassName = s.text + (displayText === 'Incorrect value!' ? ' ' + s.error : '')

    return <div className={s.displayWrapper}>

        {displayText !== '' ?
            <div className={finalDisplayTextClassName}>{displayText}</div>
            : <div className={finalCounterClassName}>{counter}</div>}

    </div>
}