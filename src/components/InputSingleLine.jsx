const InputSingleLine = ({

    label = "Label",
    inputType = "text",
    inputValue = "",
    inputID = "",
    classNames = [],
    changeHandler = null,
    enabled = true,

}) => {

    const labelElement = (
        <label
            htmlFor={inputID}
            className={["InputSingleLine-label"]}
        >
            {label}
        </label>
    )

    const inputElement = enabled ? (
        <input
            id={inputID}
            type={inputType}
            value={inputValue}
            onChange={changeHandler}
            className={["InputSingleLine-input"]}
        ></input>
    ) : (
        <input
            id={inputID}
            type={inputType}
            value={inputValue}
            onChange={changeHandler}
            className={["InputSingleLine-input"]}
            disabled
        ></input>
    )
    
    return (
        <div className={["InputSingleLine"].concat(classNames).join(" ")} >
        {labelElement}
        {inputElement}
        </div>
    )
    
}

export default InputSingleLine;
