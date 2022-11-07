type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean,
    classes: string
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button
            onClick={props.callBack}
            disabled={props.disabled}
            className={props.classes}
        >{props.name}</button>
    );
}