import './../styles/Reference.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';

const Reference = ({

    firstNames = "",
    firstNamesChangeHandler,
    lastName = "",
    lastNameChangeHandler,
    relationship = "",
    relationshipChangeHandler,
    emailAddress = "",
    emailAddressChangeHandler,
    phoneNumber = "",
    phoneNumberChangeHandler,
    deleteButtonChangeHandler,
    classNames = [],
    key = uuidv4(),

}) => {

    return (
        <div
            className={["Reference"].concat(classNames).join(" ")}
        >
        <InputSingleLine
            label="First Name(s)*: "
            inputType="text"
            inputValue={firstNames}
            inputID={`references-first-names-${key}`}
            classNames={["first-names"]}
            changeHandler={firstNamesChangeHandler}
        />
        <InputSingleLine
            label="Last Name*: "
            inputType="text"
            inputValue={lastName}
            inputID={`references-last-name-${key}`}
            classNames={["last-name"]}
            changeHandler={lastNameChangeHandler}
        />
        <InputSingleLine
            label="Relationship*: "
            inputType="text"
            inputValue={relationship}
            inputID={`references-relationship-${key}`}
            classNames={["relationship"]}
            changeHandler={relationshipChangeHandler}
        />
        <InputSingleLine
            label="Email Address*: "
            inputType="email"
            inputValue={emailAddress}
            inputID={`references-email-address-${key}`}
            classNames={["email-address"]}
            changeHandler={emailAddressChangeHandler}
        />
        <InputSingleLine
            label="Telephone Number*: "
            inputType="tel"
            inputValue={phoneNumber}
            inputID={`references-phone-number-${key}`}
            classNames={["phone-number"]}
            changeHandler={phoneNumberChangeHandler}
        />
        <ButtonBasic
            buttonText="Delete"
            clickHandler={deleteButtonChangeHandler}
        />
        </div>
    )

}

export default Reference;
