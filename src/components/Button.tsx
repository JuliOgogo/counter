import s from './Button.module.css'
import React from "react";

type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean,
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({name,
                                                      callBack,
                                                      disabled,
                                                      className}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            onClick={onClickHandler}
            disabled={disabled}
            className={s.button}
        >{name}</button>
    );
}