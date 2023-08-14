import './../styles/PreviousEducation.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const PreviousEducation = ({

    institution = "",
    institutionChangeHandler,
    institutionValidityHandler = () => institution.length > 0,
    institutionInvalidMessage = "The above field must NOT be empty.",

    qualifications = "",
    qualificationsChangeHandler,
    qualificationsValidityHandler,
    qualificationsInvalidMessage = "The above field must NOT be empty.",

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

    const institutionKey = uuidv4();
    const qualificationsKey = uuidv4();
    const startDateKey = uuidv4();
    const endDateKey = uuidv4();

    const institutionValid = typeof institutionValidityHandler === 'function' ? institutionValidityHandler() : true;
    const institutionElement = (
        <>
            <InputSingleLine
                label="Institution*: "
                inputType="text"
                inputValue={institution}
                inputID={`previous-education-institution-name-${institutionKey}`}
                classNames={["institution-name"]}
                changeHandler={institutionChangeHandler}
                enabled={editMode}
                valid={institutionValid}
            />
            {institutionValid ? null :
                <div className={["institution-invalid-message"]} >
                {institutionInvalidMessage}
                </div>
            }
        </>
    )

    const qualificationsValid = typeof qualificationsValidityHandler === 'function' ? qualificationsValidityHandler() : true;
    const qualificationsElement = (
        <>
            <TextBox
                label="Qualifications: "
                textBoxText={qualifications}
                textareaID={`previous-education-qualifications-${qualificationsKey}`}
                classNames={["qualifications"]}
                changeHandler={qualificationsChangeHandler}
                resize="none"
                scrollable={true}
                maxLength={500}
                enabled={editMode}
                valid={qualificationsValid}
            />
            {qualificationsValid ? null :
                <div className={["qualifications-invalid-message"]} >
                {qualificationsInvalidMessage}
                </div>
            }
        </>
    )

    const startDateValid = typeof startDateValidityHandler === 'function' ? startDateValidityHandler() : true;
    const startDateElement = (
        <>
            <DatePicker
                label="Start Date*: "
                inputID={`previous-education-start-date-${startDateKey}`}
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
                inputID={`previous-education-end-date-${endDateKey}`}
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
            classNames={["delete-button"]}
            clickHandler={deleteButtonClickHandler}
        />
    ) : null

    return (
        <div className={["PreviousEducation"].concat(classNames).join(" ")} >
        {institutionElement}
        {qualificationsElement}
        {startDateElement}
        {endDateElement}
        {deleteButtonElement}
        </div>
    )

}

export default PreviousEducation;
