import { useState } from 'react'
import './../styles/Form.css'

import InputSingleLine from './InputSingleLine.jsx'
import ButtonBasic from './ButtonBasic.jsx'
import TextBox from './TextBox.jsx'

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
const previousEducation = () => {
    return {
        id: counter++,
        institution: "",
        qualifications: [],
        startDate: null,
        endDate: null,
    }
}
const qualification = () => {
    return {
        id: counter++,
        name: "",
        grade: "",
    }
}
const previousEmployment = () => {
    return {
        id: counter++,
        company: "",
        role: "",
        responsibilities: "",
        startDate: null,
        endDate: null,
    }
}
const references = () => {
    return {
        id: counter++,
        firstName: "",
        lastName: "",
        relation: "",
        emailAddress: "",
        phoneNumber: "",
    }
}

function Form() {
    const [currentPage, setCurrentPage] = useState("PersonalInfo");
    const [personalInformation, setPersonalInformation] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
    });
    const [hobbiesInterests, setHobbiesInterests] = useState("");

    const classNames = {
        formContainer: "cv-application-form-container",
        formSectionTitle: "cv-application-form-section-title",
        textRegular: "cv-application-text-regular",
        inputsArea: "cv-application-inputs-area",
        pageButtons: "cv-application-page-buttons",
    }

    switch (currentPage) {
        case "Home":
            return (
                <div className={classNames.formContainer}>
                <h2 className={classNames.formSectionTitle}>CV Application</h2>
                <h4 className={classNames.textRegular}>Click the button below to get started</h4>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
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
