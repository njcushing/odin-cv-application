const DatePicker = ({

    label = "",
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
                className={[
                    "DatePicker-label"
                ]}
            >
            {label}
            </label>
            <input
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
