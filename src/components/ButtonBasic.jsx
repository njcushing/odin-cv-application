const ButtonBasic = ({

    buttonText = "Button",
    classNames = [],
    clickHandler = null,

}) => {
    
    return (
        <>
        <button
            onClick={clickHandler}
            className={["ButtonBasic"].concat(classNames).join(" ")}
        >
            {buttonText}
        </button>
        </>
    )
    
}

export default ButtonBasic;
