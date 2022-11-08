import React from "react";
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
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
        className={s.button}
    >{name}
    </button>
}