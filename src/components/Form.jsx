import { useState } from 'react';
import './../styles/Form.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';

const CVInformation = {
    firstName: "",
    secondName: "",
    emailAddress: "",
    phoneNumber: "",
    previousEducation: [],
    previousEmployment: [],
    hobbiesInterests: "",
    references: [],
}
const previousEducationNew = () => {
    return {
        uniqueID: uuidv4(),
        institution: "",
        qualifications: "",
        startDate: null,
        endDate: null,
    }
}
const qualification = () => {
    return {
        uniqueID: uuidv4(),
        name: "",
        grade: "",
    }
}
const previousEmployment = () => {
    return {
        uniqueID: uuidv4(),
        company: "",
        role: "",
        responsibilities: "",
        startDate: null,
        endDate: null,
    }
}
const references = () => {
    return {
        uniqueID: uuidv4(),
        firstName: "",
        lastName: "",
        relation: "",
        emailAddress: "",
        phoneNumber: "",
    }
}

function Form() {
    const [currentPage, setCurrentPage] = useState("Education");
    const [personalInformation, setPersonalInformation] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
    });
    const [previousEducation, setPreviousEducation] = useState(new Map());
    const [hobbiesInterests, setHobbiesInterests] = useState("");

    const classNames = {
        formContainer: "cv-application-form-container",
        formSectionTitle: "cv-application-form-section-title",
        textRegular: "cv-application-text-regular",
        personalInfoContainer: "cv-application-personal-info-container",
        previousEducationContainer: "cv-application-previous-education-container",
        previousEducationElement: "cv-application-previous-education-element",
        inputsArea: "cv-application-inputs-area",
        getStartedButton: "cv-application-get-started-button",
        addFieldButton: "cv-application-add-field-button",
        requiredFieldWarning: "cv-application-required-field-warning",
        pageButtons: "cv-application-page-buttons",
    }

    const requiredFieldWarning = (
        <div className={classNames.requiredFieldWarning}>
            Any field marked by an asterisk (*) is a <strong>required</strong> field.
        </div>
    )

    switch (currentPage) {
        case "Home":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>CV Application</h2>
                <h4 className={classNames.textRegular}>Click the button below to get started</h4>
                <div className={classNames.getStartedButton}>
                    <ButtonBasic buttonText="Get Started" clickHandler={() => 
                        setCurrentPage("PersonalInfo")}/>
                </div>
                </div>
            )
        case "PersonalInfo":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Personal Information</h2>
                {requiredFieldWarning}
                <div className={classNames.personalInfoContainer}>
                    <InputSingleLine
                        label="First Name(s)*: "
                        inputType="text"
                        inputValue={personalInformation.firstName}
                        inputID="personal-info-first-name"
                        classNames={["first-names"]}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, firstName: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        label="Last Name*: "
                        inputType="text"
                        inputValue={personalInformation.lastName}
                        inputID="personal-info-last-name"
                        classNames={["last-name"]}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, lastName: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        label="Email Address*: "
                        inputType="email"
                        inputValue={personalInformation.emailAddress}
                        inputID="personal-info-email-address"
                        classNames={["email-address"]}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, emailAddress: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        label="Telephone Number*: "
                        inputType="tel"
                        inputValue={personalInformation.phoneNumber}
                        inputID="personal-info-phone-number"
                        classNames={["phone-number"]}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, phoneNumber: e.target.value }
                        )}
                    />
                </div>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Home")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Education")}/>
                </div>
                </div>
            )
        case "Education":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Education</h2>
                {requiredFieldWarning}
                <div className={classNames.previousEducationContainer}>
                    {[...previousEducation.keys()].map((uniqueID) => {
                        const education = previousEducation.get(uniqueID);
                        return (
                            <div
                                className={classNames.previousEducationElement}
                                key={uniqueID}
                            >
                            <InputSingleLine
                                label="Institution*: "
                                inputType="text"
                                inputValue={education.institution}
                                inputID={`personal-info-institution-name-${education.uniqueID}`}
                                classNames={["institution-name"]}
                                changeHandler={(e) => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.get(uniqueID).institution = e.target.value;
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            <TextBox
                                label="Qualifications: "
                                textBoxText={education.qualifications}
                                textareaID={`personal-info-qualifications-${education.uniqueID}`}
                                classNames={["qualifications"]}
                                changeHandler={(e) => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.get(uniqueID).qualifications = e.target.value;
                                    setPreviousEducation(previousEducationCopy);
                                }}
                                resize="none"
                                scrollable={true}
                                maxLength={500}
                            />
                            <DatePicker
                                label="Start Date*: "
                                inputID={`personal-info-start-date-${education.uniqueID}`}
                                date={education.startDate}
                                classNames={["start-date"]}
                                changeHandler={(e) => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.get(uniqueID).startDate = e.target.value;
                                    if (
                                        new Date(previousEducationCopy.get(uniqueID).startDate) >
                                        new Date(previousEducationCopy.get(uniqueID).endDate)
                                    ) {
                                        previousEducationCopy.get(uniqueID).endDate = e.target.value;
                                    }
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            <DatePicker
                                label="End Date*: "
                                inputID={`personal-info-end-date-${education.uniqueID}`}
                                date={education.endDate}
                                classNames={["end-date"]}
                                changeHandler={(e) => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.get(uniqueID).endDate = e.target.value;
                                    if (
                                        new Date(previousEducationCopy.get(uniqueID).endDate) <
                                        new Date(previousEducationCopy.get(uniqueID).startDate)
                                    ) {
                                        previousEducationCopy.get(uniqueID).startDate = e.target.value;
                                    }
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            <ButtonBasic
                                buttonText="Delete"
                                clickHandler={() => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.delete(uniqueID);
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            </div>
                        )
                    })}
                    <div className={classNames.addFieldButton}>
                        <ButtonBasic
                            buttonText="Create New"
                            clickHandler={() => {
                                var newEducation = previousEducationNew();
                                var uniqueID = newEducation.uniqueID;
                                var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                previousEducationCopy.set(uniqueID, newEducation);
                                setPreviousEducation(previousEducationCopy);
                            }}
                        />
                    </div>
                </div>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("PersonalInfo")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Employment")}/>
                </div>
                </div>
            )
        case "Employment":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Previous Employment</h2>
                {requiredFieldWarning}
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Education")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("HobbiesInterests")}/>
                </div>
                </div>
            )
        case "HobbiesInterests":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Hobbies and Interests</h2>
                {requiredFieldWarning}
                <h4 className={classNames.textRegular}>
                    Please tell us a little more about yourself using the box below</h4>
                <TextBox
                    label=""
                    textBoxText={hobbiesInterests}
                    textareaID="hobbies-interests"
                    changeHandler={(e) => setHobbiesInterests(e.target.value)}
                    resize="none"
                    scrollable={true}
                    maxLength={500}
                />
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Employment")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("References")}/>
                </div>
                </div>
            )
        case "References":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Personal References</h2>
                {requiredFieldWarning}
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("HobbiesInterests")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Review")}/>
                </div>
                </div>
            )
        case "Review":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>Review Your Information</h2>
                {requiredFieldWarning}
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("References")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Submitted")}/>
                </div>
                </div>
            )
        case "Submitted":
            return (
                <div className={classNames.formContainer}>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Review")}/>
                </div>
                </div>
            )
        default:
            return null;
    }
}

export default Form;
