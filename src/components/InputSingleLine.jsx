const InputSingleLine = ({

    inputType = "text",
    labelText = "Label",
    inputValue = "",
    changeHandler = null,

}) => {
    
    return (
        <>
        <label>
            {labelText}
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
