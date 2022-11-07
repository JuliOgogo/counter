import React from "react";
import './SuperButton.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const SuperButton: React.FC<ButtonPropsType> = ({
                                                           name,
                                                           callBack,
                                                           disabled
                                                       }) => {

    const onClickHandler = () => {
        callBack()
    }

    return <button
        onClick={onClickHandler}
        disabled={disabled}
    >{name}
    </button>
}