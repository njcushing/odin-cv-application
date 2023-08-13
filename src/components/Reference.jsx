import './../styles/Reference.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';

const Reference = ({

    firstNames = "",
    firstNamesChangeHandler,
    firstNamesValidityHandler,
    lastName = "",
    lastNameChangeHandler,
    lastNameValidityHandler,
    relationship = "",
    relationshipChangeHandler,
    relationshipValidityHandler,
    emailAddress = "",
    emailAddressChangeHandler,
    emailAddressValidityHandler,
    phoneNumber = "",
    phoneNumberChangeHandler,
    phoneNumberValidityHandler,
    deleteButtonChangeHandler,
    classNames = [],
    editMode = false,

}) => {

    const firstNamesKey = uuidv4();
    const lastNameKey = uuidv4();
    const relationshipKey = uuidv4();
    const emailAddressKey = uuidv4();
    const phoneNumberKey = uuidv4();

    const firstNamesElement = (
        <InputSingleLine
            label="First Name(s)*: "
            inputType="text"
            inputValue={firstNames}
            inputID={`references-first-names-${firstNamesKey}`}
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
            inputID={`references-last-name-${lastNameKey}`}
            classNames={["last-name"]}
            changeHandler={lastNameChangeHandler}
            enabled={editMode}
            valid={lastNameValidityHandler}
        />
    )

    const responsibilitiesElement = (
        <InputSingleLine
            label="Relationship*: "
            inputType="text"
            inputValue={relationship}
            inputID={`references-relationship-${relationshipKey}`}
            classNames={["relationship"]}
            changeHandler={relationshipChangeHandler}
            enabled={editMode}
            valid={relationshipValidityHandler}
        />
    )

    const emailAddressElement = (
        <InputSingleLine
            label="Email Address*: "
            inputType="email"
            inputValue={emailAddress}
            inputID={`references-email-address-${emailAddressKey}`}
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
            inputID={`references-phone-number-${phoneNumberKey}`}
            classNames={["phone-number"]}
            changeHandler={phoneNumberChangeHandler}
            enabled={editMode}
            valid={phoneNumberValidityHandler}
        />
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
        {responsibilitiesElement}
        {emailAddressElement}
        {phoneNumberElement}
        {deleteButtonElement}
        </div>
    )

}

export default Reference;
