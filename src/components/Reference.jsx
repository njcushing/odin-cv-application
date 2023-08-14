import './../styles/Reference.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';

const Reference = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler,
    firstNamesInvalidMessage,

    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler,
    lastNameInvalidMessage,

    relationship = "",
    relationshipChangeHandler,
    relationshipValidityHandler,
    relationshipInvalidMessage,

    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler,
    emailAddressInvalidMessage,

    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler,
    phoneNumberInvalidMessage,

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
