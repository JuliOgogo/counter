import s from './Counter.module.css';
import {Button} from "./Button";
import {Display} from "./Display";

type CounterPropsType = {
    counter: number,
    counterIncrements: () => void,
    counterResets: () => void,
    min: number,
    max: number
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

            <Display min={props.min}
                     max={props.max}
                     counter={props.counter}
            />

            <div className={s.buttons}>
                <Button name={'inc'}
                        callBack={onClickIncHandler}
                        disabled={props.counter === props.max}
                />
                <Button name={'reset'}
                        callBack={onClickResetHandler}
                        disabled={props.counter === props.min}
                />
            </div>
        </div>
    );
}

/*<div className={props.counter === props.max ? `${s.error} ${s.number}` : s.number}><h2>{props.counter}</h2></div>*/

/*<button onClick={onClickIncHandler} disabled={props.counter === 5} className={s.button}>inc</button>
  <button onClick={onClickResetHandler} disabled={props.counter === 0} className={s.button}>reset</button>*/