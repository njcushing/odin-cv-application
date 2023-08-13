import './../styles/PersonalInformation.css';

import InputSingleLine from './InputSingleLine.jsx';

const PersonalInformation = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler,
    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler,
    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler,
    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler,
    classNames = [],
    editMode = false,

}) => {

    const firstNamesElement = (
        <InputSingleLine
            label="First Name(s)*: "
            inputType="text"
            inputValue={firstNames}
            inputID="personal-info-first-name"
            classNames={["first-names"]}
            changeHandler={firstNamesChangeHandler}
            enabled={editMode}
            valid={firstNamesValidityHandler}
        />
    )

    const lastNameElement = (
        <InputSingleLine
            label="Last Name*: "
            inputType="text"
            inputValue={lastName}
            inputID="personal-info-last-name"
            classNames={["last-name"]}
            changeHandler={lastNameChangeHandler}
            enabled={editMode}
            valid={lastNameValidityHandler}
        />
    )

    const emailAddressElement = (
        <InputSingleLine
            label="Email Address*: "
            inputType="email"
            inputValue={emailAddress}
            inputID="personal-info-email-address"
            classNames={["email-address"]}
            changeHandler={emailAddressChangeHandler}
            enabled={editMode}
            valid={emailAddressValidityHandler}
        />
    )

    const phoneNumberElement = (
        <InputSingleLine
            label="Telephone Number*: "
            inputType="tel"
            inputValue={phoneNumber}
            inputID="personal-info-phone-number"
            classNames={["phone-number"]}
            changeHandler={phoneNumberChangeHandler}
            enabled={editMode}
            valid={phoneNumberValidityHandler}
        />
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
