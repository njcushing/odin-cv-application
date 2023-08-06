const InputSingleLine = ({

    labelText = "Label",
    inputValue = "",
    changeHandler=null,

}) => {
    
    return (
        <>
        <label>
            {labelText}
            <input type='text' value={inputValue} onChange={changeHandler}>
            </input>
        </label>
        </>
    )
    
}

export default InputSingleLine;
