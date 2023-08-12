const DatePicker = ({

    label = "",
    inputID = "",
    date = "",
    classNames = [],
    changeHandler = null,
    enabled = true,

}) => {

    const labelElement = (
        <label
            htmlFor={inputID}
            className={["DatePicker-label"]}
        >
        {label}
        </label>
    )

    const inputElement = enabled ? (
        <input
            id={inputID}
            className={["DatePicker-input"]}
            type="date"
            onChange={changeHandler}
            value={date}
        ></input>
    ) : (
        <input
            id={inputID}
            className={["DatePicker-input"]}
            type="date"
            onChange={changeHandler}
            value={date}
            disabled
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
