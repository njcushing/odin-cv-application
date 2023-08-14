import './../styles/PersonalInformation.css';

import InputSingleLine from './InputSingleLine.jsx';

const PersonalInformation = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler = () => {
        return /^[0-9a-z](\ ?[0-9a-z])*$/i.test(firstNames);
    },

    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler = () => {
        return /^[0-9a-z](\ ?[0-9a-z])*$/i.test(lastName);
    },

    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler = () => {
        if (emailAddress.length === 0) return false;
        return String(emailAddress).toLowerCase().match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
    },

    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler = () => {
        return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(phoneNumber);
    },

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
                The above field must NOT be empty. Your name(s) can contain letters, numbers and spaces.
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
                The above field must NOT be empty. Your name(s) can contain letters, numbers and spaces.
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
                The above field must NOT be empty. Your email must be in the format: xxx@yyy.zzz.
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
                The above field must NOT be empty. Your phone number must be a valid UK phone number.
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
