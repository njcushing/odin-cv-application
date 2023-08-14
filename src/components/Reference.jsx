import './../styles/Reference.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';

const Reference = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler = () => {
        return /^[0-9a-z](\ ?[0-9a-z])*$/i.test(firstNames);
    },
    firstNamesInvalidMessage = "The above field must NOT be empty. Your name(s) can contain letters, numbers and spaces.",

    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler = () => {
        return /^[0-9a-z](\ ?[0-9a-z])*$/i.test(lastName);
    },
    lastNameInvalidMessage = "The above field must NOT be empty. Your name(s) can contain letters, numbers and spaces.",

    relationship = "",
    relationshipChangeHandler,
    relationshipValidityHandler,
    relationshipInvalidMessage = "The above field must NOT be empty.",

    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler = () => {
        if (emailAddress.length === 0) return false;
        return String(emailAddress).toLowerCase().match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
    },
    emailAddressInvalidMessage = "The above field must NOT be empty. Your email must be in the format: xxx@yyy.zzz.",

    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler = () => {
        return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(phoneNumber);
    },
    phoneNumberInvalidMessage = "The above field must NOT be empty. Your phone number must be a valid UK phone number.",

    deleteButtonChangeHandler,
    classNames = [],
    editMode = false,

}) => {

    const firstNamesKey = uuidv4();
    const lastNameKey = uuidv4();
    const relationshipKey = uuidv4();
    const emailAddressKey = uuidv4();
    const phoneNumberKey = uuidv4();

    const firstNamesValid = typeof firstNamesValidityHandler === 'function' ? firstNamesValidityHandler() : true;
    const firstNamesElement = (
        <>
            <InputSingleLine
                label="First Name(s)*: "
                inputType="text"
                inputValue={firstNames}
                inputID={`references-first-names-${firstNamesKey}`}
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
                inputID={`references-last-name-${lastNameKey}`}
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

    const relationshipValid = typeof relationshipValidityHandler === 'function' ? relationshipValidityHandler() : true;
    const relationshipElement = (
        <>
            <InputSingleLine
                label="Relationship*: "
                inputType="text"
                inputValue={relationship}
                inputID={`references-relationship-${relationshipKey}`}
                classNames={["relationship"]}
                changeHandler={relationshipChangeHandler}
                enabled={editMode}
                valid={relationshipValid}
            />
            {relationshipValid ? null :
                <div className={["relationship-invalid-message"]} >
                {relationshipInvalidMessage}
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
                inputID={`references-email-address-${emailAddressKey}`}
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
                inputID={`references-phone-number-${phoneNumberKey}`}
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

    const deleteButtonElement = editMode ? (
        <ButtonBasic
            buttonText="Delete"
            clickHandler={deleteButtonChangeHandler}
        />
    ) : null

    return (
        <div className={["Reference"].concat(classNames).join(" ")} >
        {firstNamesElement}
        {lastNameElement}
        {relationshipElement}
        {emailAddressElement}
        {phoneNumberElement}
        {deleteButtonElement}
        </div>
    )

}

export default Reference;
