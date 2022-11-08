import React, {ChangeEvent} from "react";
import s from './SuperInput.module.css'

type SuperInputPropsType = {
    name: string
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              name,
                                                              value,
                                                              callBack
                                                          }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e)
    }

    return <div className={s.SuperInput}>
        <div className={s.text}>{name}</div>
        <input value={value}
               onChange={onChangeHandler}
               type={'number'}
               className={s.input}/>
    </div>
}