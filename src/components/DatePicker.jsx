const DatePicker = ({

    label = "",
    inputID = "",
    date = "",
    changeHandler = null,

}) => {
    
    return (
        <div
            className={[
                "DatePicker"
            ]}
        >
            <label
                htmlFor={inputID}
                className={[
                    "DatePicker-label"
                ]}
            >
            {label}
            </label>
            <input
                id={inputID}
                className={[
                    "DatePicker-input"
                ]}
                type="date"
                onChange={changeHandler}
                value={date}
            ></input>
        </div>
    )

}

export default DatePicker;
