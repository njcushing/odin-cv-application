const ButtonBasic = ({

    buttonText = "Button",
    classNames = [],
    clickHandler = null,
    enabled = true,

}) => {

    const buttonElement = enabled ? (
        <button
            onClick={clickHandler}
            className={["ButtonBasic"].concat(classNames).join(" ")}
        >
            {buttonText}
        </button>
    ) : (
        <button
            onClick={clickHandler}
            className={["ButtonBasic"].concat(classNames).join(" ")}
            disabled
        >
            {buttonText}
        </button>
    )
    
    return (
        <>
        {buttonElement}
        </>
    )
    
}

export default ButtonBasic;
