import { useState } from 'react';
import './../styles/Form.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import InputSingleLine from './InputSingleLine.jsx';
import TextBox from './TextBox.jsx';
import DatePicker from './DatePicker.jsx';
import PersonalInformation from './PersonalInformation.jsx';

const previousEducationNew = () => {
    return {
        uniqueID: uuidv4(),
        institution: "",
        qualifications: "",
        startDate: null,
        endDate: null,
    }
}
const previousEmploymentNew = () => {
    return {
        uniqueID: uuidv4(),
        company: "",
        role: "",
        responsibilities: "",
        startDate: null,
        endDate: null,
    }
}
const referenceNew = () => {
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
    const [previousEmployment, setPreviousEmployment] = useState(new Map());
    const [hobbiesInterests, setHobbiesInterests] = useState("");
    const [references, setReferences] = useState(new Map());

    const classNames = {
        formContainer: "cv-application-form-container",
        formSectionTitle: "cv-application-form-section-title",
        textRegular: "cv-application-text-regular",
        personalInfoContainer: "cv-application-personal-info-container",
        previousEducationContainer: "cv-application-previous-education-container",
        previousEducationElement: "cv-application-previous-education-element",
        previousEmploymentContainer: "cv-application-previous-employment-container",
        previousEmploymentElement: "cv-application-previous-employment-element",
        hobbiesInterestsContainer: "cv-application-hobbies-interests-container",
        referencesContainer: "cv-application-references-container",
        referencesElement: "cv-application-references-element",
        inputsArea: "cv-application-inputs-area",
        getStartedButton: "cv-application-get-started-button",
        addFieldButton: "cv-application-add-field-button",
        requiredFieldWarning: "cv-application-required-field-warning",
        pageButtons: "cv-application-page-buttons",
        submitButton: "cv-application-submit-button",
    }

    const sectionTitle = (title) => <h2 className={classNames.formSectionTitle}>{title}</h2>

    const requiredFieldWarning = (
        <div className={classNames.requiredFieldWarning}>
            Any field marked by an asterisk (*) is a <strong>required</strong> field.
        </div>
    )

    const personalInfo = (
        <PersonalInformation
            firstNames={personalInformation.firstName}
            firstNamesChangeHandler={(e) => setPersonalInformation(
                { ...personalInformation, firstName: e.target.value }
            )}
            lastName={personalInformation.lastName}
            lastNameChangeHandler={(e) => setPersonalInformation(
                { ...personalInformation, lastName: e.target.value }
            )}
            emailAddress={personalInformation.emailAddress}
            emailAddressChangeHandler={(e) => setPersonalInformation(
                { ...personalInformation, emailAddress: e.target.value }
            )}
            phoneNumber={personalInformation.phoneNumber}
            phoneNumberChangeHandler={(e) => setPersonalInformation(
                { ...personalInformation, phoneNumber: e.target.value }
            )}
            classNames={[classNames.personalInfoContainer]}
        />
    )

    const pageButtons = (prev, next) => {
        return (
            <div className={classNames.pageButtons}>
                <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                    setCurrentPage(prev)}/>
                <ButtonBasic buttonText="Next Page" clickHandler={() => 
                    setCurrentPage(next)}/>
            </div>
        )
    }

    switch (currentPage) {
        case "Home":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("CV Application")}
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
                {sectionTitle("Personal Information")}
                {requiredFieldWarning}
                {personalInfo}
                {pageButtons("Home", "Education")}
                </div>
            )
        case "Education":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Education")}
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
                                inputID={`previous-education-institution-name-${education.uniqueID}`}
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
                                textareaID={`previous-education-qualifications-${education.uniqueID}`}
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
                                inputID={`previous-education-start-date-${education.uniqueID}`}
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
                                inputID={`previous-education-end-date-${education.uniqueID}`}
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
                {pageButtons("PersonalInfo", "Employment")}
                </div>
            )
        case "Employment":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Previous Employment")}
                {requiredFieldWarning}
                <div className={classNames.previousEmploymentContainer}>
                    {[...previousEmployment.keys()].map((uniqueID) => {
                        const employment = previousEmployment.get(uniqueID);
                        return (
                            <div
                                className={classNames.previousEmploymentElement}
                                key={uniqueID}
                            >
                            <InputSingleLine
                                label="Company*: "
                                inputType="text"
                                inputValue={employment.company}
                                inputID={`previous-employment-company-name-${employment.uniqueID}`}
                                classNames={["company-name"]}
                                changeHandler={(e) => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.get(uniqueID).company = e.target.value;
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                            />
                            <InputSingleLine
                                label="Role*: "
                                inputType="text"
                                inputValue={employment.role}
                                inputID={`previous-employment-role-${employment.uniqueID}`}
                                classNames={["role"]}
                                changeHandler={(e) => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.get(uniqueID).role = e.target.value;
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                            />
                            <TextBox
                                label="Responsibilities: "
                                textBoxText={employment.responsibilities}
                                textareaID={`previous-employment-responsibilities-${employment.uniqueID}`}
                                classNames={["responsibilities"]}
                                changeHandler={(e) => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.get(uniqueID).responsibilities = e.target.value;
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                                resize="none"
                                scrollable={true}
                                maxLength={500}
                            />
                            <DatePicker
                                label="Start Date*: "
                                inputID={`previous-employment-start-date-${employment.uniqueID}`}
                                date={employment.startDate}
                                classNames={["start-date"]}
                                changeHandler={(e) => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.get(uniqueID).startDate = e.target.value;
                                    if (
                                        new Date(previousEmploymentCopy.get(uniqueID).startDate) >
                                        new Date(previousEmploymentCopy.get(uniqueID).endDate)
                                    ) {
                                        previousEmploymentCopy.get(uniqueID).endDate = e.target.value;
                                    }
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                            />
                            <DatePicker
                                label="End Date*: "
                                inputID={`previous-employment-end-date-${employment.uniqueID}`}
                                date={employment.endDate}
                                classNames={["end-date"]}
                                changeHandler={(e) => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.get(uniqueID).endDate = e.target.value;
                                    if (
                                        new Date(previousEmploymentCopy.get(uniqueID).endDate) <
                                        new Date(previousEmploymentCopy.get(uniqueID).startDate)
                                    ) {
                                        previousEmploymentCopy.get(uniqueID).startDate = e.target.value;
                                    }
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                            />
                            <ButtonBasic
                                buttonText="Delete"
                                clickHandler={() => {
                                    var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                    previousEmploymentCopy.delete(uniqueID);
                                    setPreviousEmployment(previousEmploymentCopy);
                                }}
                            />
                            </div>
                        )
                    })}
                    <div className={classNames.addFieldButton}>
                        <ButtonBasic
                            buttonText="Create New"
                            clickHandler={() => {
                                var newEmployment = previousEmploymentNew();
                                var uniqueID = newEmployment.uniqueID;
                                var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                                previousEmploymentCopy.set(uniqueID, newEmployment);
                                setPreviousEmployment(previousEmploymentCopy);
                            }}
                        />
                    </div>
                </div>
                {pageButtons("Education", "HobbiesInterests")}
                </div>
            )
        case "HobbiesInterests":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Hobbies Interests")}
                {requiredFieldWarning}
                <div className={classNames.hobbiesInterestsContainer}>
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
                </div>
                {pageButtons("Employment", "References")}
                </div>
            )
        case "References":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Personal References")}
                {requiredFieldWarning}
                <div className={classNames.referencesContainer}>
                    {[...references.keys()].map((uniqueID) => {
                        const reference = references.get(uniqueID);
                        return (
                            <div
                                className={classNames.referencesElement}
                                key={uniqueID}
                            >
                            <InputSingleLine
                                label="First Name(s)*: "
                                inputType="text"
                                inputValue={reference.firstName}
                                inputID={`references-first-names-${reference.uniqueID}`}
                                classNames={["first-names"]}
                                changeHandler={(e) => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.get(uniqueID).firstName = e.target.value;
                                    setReferences(referencesCopy);
                                }}
                            />
                            <InputSingleLine
                                label="Last Name*: "
                                inputType="text"
                                inputValue={reference.lastName}
                                inputID={`references-last-name-${reference.uniqueID}`}
                                classNames={["last-name"]}
                                changeHandler={(e) => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.get(uniqueID).lastName = e.target.value;
                                    setReferences(referencesCopy);
                                }}
                            />
                            <InputSingleLine
                                label="Relationship*: "
                                inputType="text"
                                inputValue={reference.relationship}
                                inputID={`references-relationship-${reference.uniqueID}`}
                                classNames={["relationship"]}
                                changeHandler={(e) => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.get(uniqueID).relationship = e.target.value;
                                    setReferences(referencesCopy);
                                }}
                            />
                            <InputSingleLine
                                label="Email Address*: "
                                inputType="email"
                                inputValue={reference.emailAddress}
                                inputID={`references-email-address-${reference.uniqueID}`}
                                classNames={["email-address"]}
                                changeHandler={(e) => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.get(uniqueID).emailAddress = e.target.value;
                                    setReferences(referencesCopy);
                                }}
                            />
                            <InputSingleLine
                                label="Telephone Number*: "
                                inputType="tel"
                                inputValue={reference.phoneNumber}
                                inputID={`references-phone-number-${reference.uniqueID}`}
                                classNames={["phone-number"]}
                                changeHandler={(e) => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.get(uniqueID).phoneNumber = e.target.value;
                                    setReferences(referencesCopy);
                                }}
                            />
                            <ButtonBasic
                                buttonText="Delete"
                                clickHandler={() => {
                                    var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                    referencesCopy.delete(uniqueID);
                                    setReferences(referencesCopy);
                                }}
                            />
                            </div>
                        )
                    })}
                    <div className={classNames.addFieldButton}>
                        <ButtonBasic
                            buttonText="Create New"
                            clickHandler={() => {
                                var newReference = referenceNew();
                                var uniqueID = newReference.uniqueID;
                                var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                                referencesCopy.set(uniqueID, newReference);
                                setReferences(referencesCopy);
                            }}
                        />
                    </div>
                </div>
                {pageButtons("HobbiesInterests", "Review")}
                </div>
            )
        case "Review":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Review Your Information")}
                {requiredFieldWarning}
                <div className={classNames.submitButton}>
                    <ButtonBasic buttonText="Submit" clickHandler={() => 
                        setCurrentPage("References")}/>
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
