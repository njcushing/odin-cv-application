import { useState } from 'react';
import './../styles/PersonalInformation.css';

import InputSingleLine from './InputSingleLine.jsx';

const PersonalInformation = ({

    firstNames = "",
    firstNamesChangeHandler,
    lastName = "",
    lastNameChangeHandler,
    emailAddress = "",
    emailAddressChangeHandler,
    phoneNumber = "",
    phoneNumberChangeHandler,
    classNames = [],

}) => {

    return (
        <div
            className={["PersonalInformation"].concat(classNames).join(" ")}
        >
            <InputSingleLine
                label="First Name(s)*: "
                inputType="text"
                inputValue={firstNames}
                inputID="personal-info-first-name"
                classNames={["first-names"]}
                changeHandler={firstNamesChangeHandler}
            />
            <InputSingleLine
                label="Last Name*: "
                inputType="text"
                inputValue={lastName}
                inputID="personal-info-last-name"
                classNames={["last-name"]}
                changeHandler={lastNameChangeHandler}
            />
            <InputSingleLine
                label="Email Address*: "
                inputType="email"
                inputValue={emailAddress}
                inputID="personal-info-email-address"
                classNames={["email-address"]}
                changeHandler={emailAddressChangeHandler}
            />
            <InputSingleLine
                label="Telephone Number*: "
                inputType="tel"
                inputValue={phoneNumber}
                inputID="personal-info-phone-number"
                classNames={["phone-number"]}
                changeHandler={phoneNumberChangeHandler}
            />
        </div>
    );

}

export default PersonalInformation;
