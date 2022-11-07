import React, {ChangeEvent} from "react";
import s from './SuperInput.module.css'

type SuperInputPropsType = {
    name: string
    value: number
    type: string
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              name,
                                                              value,
                                                              type,
                                                              callBack
                                                          }) => {

    return <div className={s.SuperInput}>
        <div className={s.text}>{name}</div>
        <input value={value}
               onChange={callBack}
               type={type}/>
    </div>
}