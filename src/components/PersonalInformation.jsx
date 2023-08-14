import './../styles/PersonalInformation.css';

import InputSingleLine from './InputSingleLine.jsx';

const PersonalInformation = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler,
    firstNamesInvalidMessage,

    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler,
    lastNameInvalidMessage,

    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler,
    emailAddressInvalidMessage,

    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler,
    phoneNumberInvalidMessage,

    classNames = [],
    editMode = false,

}) => {

    const firstNamesValid = typeof firstNamesValidityHandler === 'function' ? firstNamesValidityHandler() : true;
    const firstNamesElement = (
        <>
            <InputSingleLine
                label="First Name(s)*: "
                inputType="text"
                inputValue={firstNames}
                inputID="personal-info-first-name"
                classNames={["first-names"]}
                changeHandler={firstNamesChangeHandler}
                enabled={editMode}
                valid={firstNamesValid}
            />
            {firstNamesValid ? null :
                <div className={["first-names-invalid-message"]} >
                {firstNamesInvalidMessage}
                </div>
            }
        </>
    )

    const lastNameValid = typeof lastNameValidityHandler === 'function' ? lastNameValidityHandler() : true;
    const lastNameElement = (
        <>
            <InputSingleLine
                label="Last Name*: "
                inputType="text"
                inputValue={lastName}
                inputID="personal-info-last-name"
                classNames={["last-name"]}
                changeHandler={lastNameChangeHandler}
                enabled={editMode}
                valid={lastNameValid}
            />
            {lastNameValid ? null :
                <div className={["last-name-invalid-message"]} >
                {lastNameInvalidMessage}
                </div>
            }
        </>
    )

    const emailAddressValid = typeof emailAddressValidityHandler === 'function' ? emailAddressValidityHandler() : true;
    const emailAddressElement = (
        <>
            <InputSingleLine
                label="Email Address*: "
                inputType="email"
                inputValue={emailAddress}
                inputID="personal-info-email-address"
                classNames={["email-address"]}
                changeHandler={emailAddressChangeHandler}
                enabled={editMode}
                valid={emailAddressValid}
            />
            {emailAddressValid ? null :
                <div className={["email-address-invalid-message"]} >
                {emailAddressInvalidMessage}
                </div>
            }
        </>
    )

    const phoneNumberValid = typeof phoneNumberValidityHandler === 'function' ? phoneNumberValidityHandler() : true;
    const phoneNumberElement = (
        <>
            <InputSingleLine
                label="Telephone Number*: "
                inputType="tel"
                inputValue={phoneNumber}
                inputID="personal-info-phone-number"
                classNames={["phone-number"]}
                changeHandler={phoneNumberChangeHandler}
                enabled={editMode}
                valid={phoneNumberValid}
            />
            {phoneNumberValid ? null :
                <div className={["phone-number-invalid-message"]} >
                {phoneNumberInvalidMessage}
                </div>
            }
        </>
    )

    return (
        <div className={["PersonalInformation"].concat(classNames).join(" ")} >
        {firstNamesElement}
        {lastNameElement}
        {emailAddressElement}
        {phoneNumberElement}
        </div>
    );

}

export default PersonalInformation;
