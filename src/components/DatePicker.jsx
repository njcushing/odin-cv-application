const DatePicker = ({

    label = "",
    date = "",
    changeHandler = null,

}) => {
    
    return (
        <>
            <label>
            {label}
                <input
                    type="date"
                    onChange={changeHandler}
                    value={date}
                ></input>
            </label>
        </>
    )

}

export default DatePicker;
