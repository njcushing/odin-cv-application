const InputSingleLine = ({

    label = "Label",
    inputType = "text",
    inputValue = "",
    inputID = "",
    changeHandler = null,

}) => {
    
    return (
        <div
            className={[
                "input-single-line"
            ]}
        >
        <label
            htmlFor={inputID}
            className={[
                "input-single-line-label"
            ]}
        >
            {label}
        </label>
        <input
            id={inputID}
            type={inputType}
            value={inputValue}
            onChange={changeHandler}
            className={[
                "input-single-line-input"
            ]}
        >
        </input>
        </div>
    )
    
}

export default InputSingleLine;
