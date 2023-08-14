import './../styles/PreviousEmployment.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const PreviousEmployment = ({

    companyName = "",
    companyNameChangeHandler,
    companyNameValidityHandler,
    companyNameInvalidMessage = "The above field must NOT be empty.",

    role = "",
    roleChangeHandler,
    roleValidityHandler,
    roleInvalidMessage = "The above field must NOT be empty.",

    responsibilities = "",
    responsibilitiesChangeHandler,
    responsibilitiesValidityHandler,
    responsibilitiesInvalidMessage = "The above field must NOT be empty.",

    startDate = null,
    startDateChangeHandler,
    startDateValidityHandler,
    startDateInvalidMessage = "The above field must contain a valid date.",
    
    endDate = null,
    endDateChangeHandler,
    endDateValidityHandler,
    endDateInvalidMessage = "The above field must contain a valid date.",

    deleteButtonClickHandler,
    classNames = [],
    editMode = false,

}) => {

    const companyNameKey = uuidv4();
    const roleKey = uuidv4();
    const responsibilitiesKey = uuidv4();
    const startDateKey = uuidv4();
    const endDateKey = uuidv4();

    const companyNameValid = typeof companyNameValidityHandler === 'function' ? companyNameValidityHandler() : true;
    const companyNameElement = (
        <>
            <InputSingleLine
                label="Company*: "
                inputType="text"
                inputValue={companyName}
                inputID={`previous-employment-company-name-${companyNameKey}`}
                classNames={["company-name"]}
                changeHandler={companyNameChangeHandler}
                enabled={editMode}
                valid={companyNameValid}
            />
            {companyNameValid ? null :
                <div className={["company-name-invalid-message"]} >
                {companyNameInvalidMessage}
                </div>
            }
        </>
    )

    const roleValid = typeof roleValidityHandler === 'function' ? roleValidityHandler() : true;
    const roleElement = (
        <>
            <InputSingleLine
                label="Role*: "
                inputType="text"
                inputValue={role}
                inputID={`previous-employment-role-${roleKey}`}
                classNames={["role"]}
                changeHandler={roleChangeHandler}
                enabled={editMode}
                valid={roleValid}
            />
            {roleValid ? null :
                <div className={["role-invalid-message"]} >
                {roleInvalidMessage}
                </div>
            }
        </>
    )

    const responsibilitiesValid = typeof responsibilitiesValidityHandler === 'function' ? responsibilitiesValidityHandler() : true;
    const responsibilitiesElement = (
        <>
            <TextBox
                label="Responsibilities: "
                textBoxText={responsibilities}
                textareaID={`previous-employment-responsibilities-${responsibilitiesKey}`}
                classNames={["responsibilities"]}
                changeHandler={responsibilitiesChangeHandler}
                resize="none"
                scrollable={true}
                maxLength={500}
                enabled={editMode}
                valid={responsibilitiesValid}
            />
            {responsibilitiesValid ? null :
                <div className={["responsibilities-invalid-message"]} >
                {responsibilitiesInvalidMessage}
                </div>
            }
        </>
    )

    const startDateValid = typeof startDateValidityHandler === 'function' ? startDateValidityHandler() : true;
    const startDateElement = (
        <>
            <DatePicker
                label="Start Date*: "
                inputID={`previous-employment-start-date-${startDateKey}`}
                date={startDate}
                classNames={["start-date"]}
                changeHandler={startDateChangeHandler}
                enabled={editMode}
                valid={startDateValid}
            />
            {startDateValid ? null :
                <div className={["start-date-invalid-message"]} >
                {startDateInvalidMessage}
                </div>
            }
        </>
    )

    const endDateValid = typeof endDateValidityHandler === 'function' ? endDateValidityHandler() : true;
    const endDateElement = (
        <>
            <DatePicker
                label="End Date*: "
                inputID={`previous-employment-end-date-${endDateKey}`}
                date={endDate}
                classNames={["end-date"]}
                changeHandler={endDateChangeHandler}
                enabled={editMode}
                valid={endDateValid}
            />
            {endDateValid ? null :
                <div className={["end-date-invalid-message"]} >
                {endDateInvalidMessage}
                </div>
            }
        </>
    )

    const deleteButtonElement = editMode ? (
        <ButtonBasic
            buttonText="Delete"
            clickHandler={deleteButtonClickHandler}
        />
    ) : null

    return (
        <div className={["PreviousEmployment"].concat(classNames).join(" ")} >
        {companyNameElement}
        {roleElement}
        {responsibilitiesElement}
        {startDateElement}
        {endDateElement}
        {deleteButtonElement}
        </div>
    )

}

export default PreviousEmployment;
