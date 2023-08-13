const DatePicker = ({

    label = "",
    inputID = "",
    date = "",
    classNames = [],
    changeHandler = null,
    enabled = true,
    valid = true,

}) => {

    const labelElement = (
        <label
            htmlFor={inputID}
            className={["DatePicker-label"]}
        >
        {label}
        </label>
    )

    const inputElement = (
        <input
            id={inputID}
            className={[`DatePicker-input${valid ? "" : " invalid-field"}`]}
            type="date"
            onChange={changeHandler}
            value={date}
            disabled={!enabled}
        ></input>
    )
    
    return (
        <div className={["DatePicker"].concat(classNames).join(" ")} >
        {labelElement}
        {inputElement}
        </div>
    )

}

export default DatePicker;
