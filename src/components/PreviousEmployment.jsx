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
    key = uuidv4(),

}) => {

    return (
        <div
            className={["PreviousEmployment"].concat(classNames).join(" ")}
            key={key}
        >
        <InputSingleLine
            label="Company*: "
            inputType="text"
            inputValue={companyName}
            inputID={`previous-employment-company-name-${key}`}
            classNames={["company-name"]}
            changeHandler={companyNameChangeHandler}
        />
        <InputSingleLine
            label="Role*: "
            inputType="text"
            inputValue={role}
            inputID={`previous-employment-role-${key}`}
            classNames={["role"]}
            changeHandler={roleChangeHandler}
        />
        <TextBox
            label="Responsibilities: "
            textBoxText={responsibilities}
            textareaID={`previous-employment-responsibilities-${key}`}
            classNames={["responsibilities"]}
            changeHandler={responsibilitiesChangeHandler}
            resize="none"
            scrollable={true}
            maxLength={500}
        />
        <DatePicker
            label="Start Date*: "
            inputID={`previous-employment-start-date-${key}`}
            date={startDate}
            classNames={["start-date"]}
            changeHandler={startDateChangeHandler}
        />
        <DatePicker
            label="End Date*: "
            inputID={`previous-employment-end-date-${key}`}
            date={endDate}
            classNames={["end-date"]}
            changeHandler={endDateChangeHandler}
        />
        <ButtonBasic
            buttonText="Delete"
            clickHandler={deleteButtonClickHandler}
        />
        </div>
    )

}

export default PreviousEmployment;
