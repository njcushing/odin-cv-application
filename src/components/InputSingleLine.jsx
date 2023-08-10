const InputSingleLine = ({

    label = "Label",
    inputType = "text",
    inputValue = "",
    changeHandler = null,

}) => {
    
    return (
        <>
        <label>
            {label}
            <input
                type={inputType}
                value={inputValue}
                onChange={changeHandler}
            >
            </input>
        </label>
        </>
    )
    
}

export default InputSingleLine;
