const ButtonBasic = ({

    buttonText = "Button",
    clickHandler = null,

}) => {
    
    return (
        <>
        <button
            onClick={clickHandler}
            className={[
                "ButtonBasic"
            ]}
        >
            {buttonText}
        </button>
        </>
    )
    
}

export default ButtonBasic;
