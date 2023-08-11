const DatePicker = ({

    label = "",
    inputID = "",
    date = "",
    classNames = [],
    changeHandler = null,

}) => {
    
    return (
        <div
            className={["DatePicker"].concat(classNames).join(" ")}
        >
            <label
                htmlFor={inputID}
                className={["DatePicker-label"]}
            >
            {label}
            </label>
            <input
                id={inputID}
                className={["DatePicker-input"]}
                type="date"
                onChange={changeHandler}
                value={date}
            ></input>
        </div>
    )

}

export default DatePicker;
