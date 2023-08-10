import { useState } from 'react'
import './../styles/Form.css'

import ButtonBasic from './ButtonBasic.jsx'
import InputSingleLine from './InputSingleLine.jsx'
import TextBox from './TextBox.jsx'
import DatePicker from './DatePicker.jsx'

let counter = 0;
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
        uniqueID: counter++,
        institution: "",
        qualifications: "",
        startDate: null,
        endDate: null,
    }
}
const qualification = () => {
    return {
        uniqueID: counter++,
        name: "",
        grade: "",
    }
}
const previousEmployment = () => {
    return {
        uniqueID: counter++,
        company: "",
        role: "",
        responsibilities: "",
        startDate: null,
        endDate: null,
    }
}
const references = () => {
    return {
        uniqueID: counter++,
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
        inputsArea: "cv-application-inputs-area",
        getStartedButton: "cv-application-get-started-button",
        addFieldButton: "cv-application-add-field-button",
        pageButtons: "cv-application-page-buttons",
    }

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
                <div className={classNames.inputsArea}>
                    <InputSingleLine
                        inputType="text"
                        labelText="First Name(s): "
                        inputValue={personalInformation.firstName}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, firstName: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        inputType="text"
                        labelText="Last Name: "
                        inputValue={personalInformation.lastName}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, lastName: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        inputType="email"
                        labelText="Email Address: "
                        inputValue={personalInformation.emailAddress}
                        changeHandler={(e) => setPersonalInformation(
                            { ...personalInformation, emailAddress: e.target.value }
                        )}
                    />
                    <InputSingleLine
                        inputType="tel"
                        labelText="Telephone Number: "
                        inputValue={personalInformation.phoneNumber}
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
                <h4 className={classNames.textRegular}>Please include some examples
                of where and what you have studied</h4>
                <div>
                    {[...previousEducation.keys()].map((uniqueID) => {
                        const education = previousEducation.get(uniqueID);
                        return (
                            <div key={uniqueID}>
                            <InputSingleLine
                                inputType="text"
                                labelText="Institution: "
                                inputValue={education.institution}
                                changeHandler={(e) => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.get(uniqueID).institution = e.target.value;
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            <label>
                                <TextBox
                                    label="Qualifications: "
                                    textBoxText={education.qualifications}
                                    changeHandler={(e) => {
                                        var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                        previousEducationCopy.get(uniqueID).qualifications = e.target.value;
                                        setPreviousEducation(previousEducationCopy);
                                    }}
                                    size={[400, 160]}
                                    resize="none"
                                    scrollable={true}
                                    maxLength={500}
                                />
                            </label>
                            <ButtonBasic
                                buttonText="Delete"
                                clickHandler={() => {
                                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                                    previousEducationCopy.delete(uniqueID);
                                    setPreviousEducation(previousEducationCopy);
                                }}
                            />
                            <DatePicker
                                label="Start Date: "
                                date={education.startDate}
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
                                label="End Date: "
                                date={education.endDate}
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
                            </div>
                        )
                    })}
                </div>
                <div className={classNames.addFieldButton}>
                    <ButtonBasic
                        buttonText="+"
                        clickHandler={() => {
                            var newEducation = previousEducationNew();
                            var uniqueID = newEducation.uniqueID;
                            var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                            previousEducationCopy.set(uniqueID, newEducation);
                            setPreviousEducation(previousEducationCopy);
                        }}
                    />
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
                <h4 className={classNames.textRegular}>
                    Please tell us a little more about yourself using the box below</h4>
                <TextBox
                    label=""
                    textBoxText={hobbiesInterests}
                    changeHandler={(e) => setHobbiesInterests(e.target.value)}
                    size={[600, 440]}
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
