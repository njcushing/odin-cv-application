const TextBox = ({

    label="",
    textBoxText = "",
    textareaID = "",
    classNames = [],
    changeHandler = null,
    resize = "none",
    scrollable = true,
    maxLength = -1,
    placeholder = "",
    enabled = true,
    valid = true,

}) => {

    const styles = {
        resize: resize,
        overflowY: (scrollable ? "scroll" : "hidden"),
    }

    const labelElement = (
        <label
            className={["TextBox-label"]}
            htmlFor={textareaID}
        >
            {label}
        </label>
    )

    const textareaElement = (
        <textarea
            id={textareaID}
            className={[`TextBox-textarea${valid ? "" : " invalid-field"}`]}
            onChange={changeHandler}
            value={textBoxText}
            maxLength={maxLength}
            placeholder={placeholder}
            style={styles}
            disabled={!enabled}
        ></textarea>
    )
    
    return (
        <div className={["TextBox"].concat(classNames).join(" ")} >
        {labelElement}
        {textareaElement}
        </div>
    )
    
}

export default TextBox;
