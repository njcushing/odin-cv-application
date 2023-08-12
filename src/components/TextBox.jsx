const TextBox = ({

    label="",
    textBoxText = "",
    textareaID = "",
    classNames = [],
    changeHandler = null,
    resize = "none",
    scrollable = true,
    maxLength = -1,
    enabled = true,

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

    const textareaElement = enabled ? (
        <textarea
            id={textareaID}
            className={["TextBox-textarea"]}
            onChange={changeHandler}
            value={textBoxText}
            maxLength={maxLength}
            style={styles}
        ></textarea>
    ) : (
        <textarea
            id={textareaID}
            className={["TextBox-textarea"]}
            onChange={changeHandler}
            value={textBoxText}
            maxLength={maxLength}
            style={styles}
            disabled
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
