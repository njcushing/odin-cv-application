const TextBox = ({

    label="",
    textBoxText = "",
    textareaID = "",
    classNames = [],
    changeHandler = null,
    resize = "none",
    scrollable = true,
    maxLength = -1,

}) => {

    const styles = {
        resize: resize,
        overflowY: (scrollable ? "scroll" : "hidden"),
    }
    
    return (
        <div
            className={["TextBox"].concat(classNames).join(" ")}
        >
        <label
            className={["TextBox-label"]}
            htmlFor={textareaID}
        >
            {label}
        </label>
        <textarea
            id={textareaID}
            className={["TextBox-textarea"]}
            onChange={changeHandler}
            value={textBoxText}
            maxLength={maxLength}
            style={styles}
        >
        </textarea>
        </div>
    )
    
}

export default TextBox;
