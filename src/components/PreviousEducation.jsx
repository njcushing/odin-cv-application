import './../styles/PreviousEducation.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const PreviousEducation = ({

    institution = "",
    institutionChangeHandler,
    qualifications = "",
    qualificationsChangeHandler,
    startDate = null,
    startDateChangeHandler,
    endDate = null,
    endDateChangeHandler,
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
