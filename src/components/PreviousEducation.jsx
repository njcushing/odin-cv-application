import './../styles/PreviousEducation.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const PreviousEducation = ({

    institution = "",
    institutionChangeHandler,
    institutionValidityHandler,
    qualifications = "",
    qualificationsChangeHandler,
    qualificationsValidityHandler,
    startDate = null,
    startDateChangeHandler,
    startDateValidityHandler,
    endDate = null,
    endDateChangeHandler,
    endDateValidityHandler,
    deleteButtonClickHandler,
    classNames = [],
    editMode = false,

}) => {

    const institutionKey = uuidv4();
    const qualificationsKey = uuidv4();
    const startDateKey = uuidv4();
    const endDateKey = uuidv4();

    const institutionElement = (
        <InputSingleLine
            label="Institution*: "
            inputType="text"
            inputValue={institution}
            inputID={`previous-education-institution-name-${institutionKey}`}
            classNames={["institution-name"]}
            changeHandler={institutionChangeHandler}
            enabled={editMode}
            valid={institutionValidityHandler}
        />
    )

    const qualificationsElement = (
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
            valid={qualificationsValidityHandler}
        />
    )

    const startDateElement = (
        <DatePicker
            label="Start Date*: "
            inputID={`previous-education-start-date-${startDateKey}`}
            date={startDate}
            classNames={["start-date"]}
            changeHandler={startDateChangeHandler}
            enabled={editMode}
            valid={startDateValidityHandler}
        />
    )

    const endDateElement = (
        <DatePicker
            label="End Date*: "
            inputID={`previous-education-end-date-${endDateKey}`}
            date={endDate}
            classNames={["end-date"]}
            changeHandler={endDateChangeHandler}
            enabled={editMode}
            valid={endDateValidityHandler}
        />
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
