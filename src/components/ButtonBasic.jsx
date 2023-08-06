const ButtonBasic = ({

    buttonText = "Label",
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
