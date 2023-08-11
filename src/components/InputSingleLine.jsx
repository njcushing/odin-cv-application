const InputSingleLine = ({

    label = "Label",
    inputType = "text",
    inputValue = "",
    inputID = "",
    classNames = [],
    changeHandler = null,

}) => {
    
    return (
        <div
            className={["InputSingleLine"].concat(classNames).join(" ")}
        >
        <label
            htmlFor={inputID}
            className={["InputSingleLine-label"]}
        >
            {label}
        </label>
        <input
            id={inputID}
            type={inputType}
            value={inputValue}
            onChange={changeHandler}
            className={["InputSingleLine-input"]}
        >
        </input>
        </div>
    )
    
}

export default InputSingleLine;
