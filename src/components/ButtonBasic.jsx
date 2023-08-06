const ButtonBasic = ({

    buttonText = "Button",
    clickHandler = null,

}) => {
    
    return (
        <>
        <button onClick={clickHandler}>
            {buttonText}
        </button>
        </>
    )
    
}

export default ButtonBasic;
