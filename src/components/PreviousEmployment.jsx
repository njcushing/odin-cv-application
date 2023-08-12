import './../styles/PreviousEmployment.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const PreviousEmployment = ({

    companyName = "",
    companyNameChangeHandler,
    role = "",
    roleChangeHandler,
    responsibilities = "",
    responsibilitiesChangeHandler,
    startDate = null,
    startDateChangeHandler,
    endDate = null,
    endDateChangeHandler,
    deleteButtonClickHandler,
    classNames = [],
    editMode = false,

}) => {

    const companyNameKey = uuidv4();
    const roleKey = uuidv4();
    const responsibilitiesKey = uuidv4();
    const startDateKey = uuidv4();
    const endDateKey = uuidv4();

    const companyNameElement = (
        <InputSingleLine
            label="Company*: "
            inputType="text"
            inputValue={companyName}
            inputID={`previous-employment-company-name-${companyNameKey}`}
            classNames={["company-name"]}
            changeHandler={companyNameChangeHandler}
            enabled={editMode}
        />
    )

    const roleElement = (
        <InputSingleLine
            label="Role*: "
            inputType="text"
            inputValue={role}
            inputID={`previous-employment-role-${roleKey}`}
            classNames={["role"]}
            changeHandler={roleChangeHandler}
            enabled={editMode}
        />
    )

    const responsibilitiesElement = (
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
        />
    )

    const startDateElement = (
        <DatePicker
            label="Start Date*: "
            inputID={`previous-employment-start-date-${startDateKey}`}
            date={startDate}
            classNames={["start-date"]}
            changeHandler={startDateChangeHandler}
            enabled={editMode}
        />
    )

    const endDateElement = (
        <DatePicker
            label="End Date*: "
            inputID={`previous-employment-end-date-${endDateKey}`}
            date={endDate}
            classNames={["end-date"]}
            changeHandler={endDateChangeHandler}
            enabled={editMode}
        />
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
