const InputSingleLine = ({

    label = "Label",
    inputType = "text",
    inputValue = "",
    inputID = "",
    classNames = [],
    changeHandler = null,
    enabled = true,
    valid = true,

}) => {

    const labelElement = (
        <label
            htmlFor={inputID}
            className={["InputSingleLine-label"]}
        >
            {label}
        </label>
    )

    const inputElement = (
        <input
            id={inputID}
            type={inputType}
            value={inputValue}
            onChange={changeHandler}
            className={[`InputSingleLine-input${valid ? "" : " invalid-field"}`]}
            disabled={!enabled}
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
