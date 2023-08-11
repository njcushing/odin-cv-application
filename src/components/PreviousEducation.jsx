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
    key = uuidv4(),

}) => {
    
    return (
        <div
            className={["PreviousEducation"].concat(classNames).join(" ")}
            key={key}
        >
        <InputSingleLine
            label="Institution*: "
            inputType="text"
            inputValue={institution}
            inputID={`previous-education-institution-name-${key}`}
            classNames={["institution-name"]}
            changeHandler={institutionChangeHandler}
        />
        <TextBox
            label="Qualifications: "
            textBoxText={qualifications}
            textareaID={`previous-education-qualifications-${key}`}
            classNames={["qualifications"]}
            changeHandler={qualificationsChangeHandler}
            resize="none"
            scrollable={true}
            maxLength={500}
        />
        <DatePicker
            label="Start Date*: "
            inputID={`previous-education-start-date-${key}`}
            date={startDate}
            classNames={["start-date"]}
            changeHandler={startDateChangeHandler}
        />
        <DatePicker
            label="End Date*: "
            inputID={`previous-education-end-date-${key}`}
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

export default PreviousEducation;
