const TextBox = ({

    textBoxText = "Label",
    changeHandler = null,
    size = [50, 50],
    resize = "none",
    scrollable = true,
    maxLength = -1,

}) => {

    const styles = {
        width: size[0],
        height: size[1],
        resize: resize,
        overflowY: (scrollable ? "scroll" : "hidden"),
    }
    
    return (
        <>
        <textarea
            onChange={changeHandler}
            value={textBoxText}
            maxLength={maxLength}
            style={styles}
        >
        </textarea>
        </>
    )
    
}

export default TextBox;
