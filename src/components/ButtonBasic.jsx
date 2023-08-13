const ButtonBasic = ({

    buttonText = "Button",
    classNames = [],
    clickHandler = null,
    enabled = true,

}) => {

    const buttonElement = (
        <button
            onClick={clickHandler}
            className={["ButtonBasic"].concat(classNames).join(" ")}
            disabled={!enabled}
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
