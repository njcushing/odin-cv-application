const ButtonBasic = ({

    buttonText = "Button",
    clickHandler = null,

}) => {
    
    return (
        <>
        <button
            onClick={clickHandler}
            className={[
                "button-basic"
            ]}
        >
            {buttonText}
        </button>
        </>
    )
    
}

export default ButtonBasic;
