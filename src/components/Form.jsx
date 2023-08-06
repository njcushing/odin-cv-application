import { useState } from 'react'
import './../styles/Form.css'

import InputSingleLine from './InputSingleLine.jsx'

let page = "Home";
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

    const classNames = {
        formSectionTitle: "cv-application-form-section-title",
        inputsArea: "cv-application-inputs-area"
    }

    switch (currentPage) {
        case "Home":
            return (
                <>
                </>
            )
        case "PersonalInfo":
            return (
                <>
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
                </>
            )
        case "Education":
            return (
                <>
                </>
            )
        case "Employment":
            return (
                <>
                </>
            )
        case "HobbiesInterests":
            return (
                <>
                </>
            )
        case "References":
            return (
                <>
                </>
            )
        case "Review":
            return (
                <>
                </>
            )
        case "Submitted":
            return (
                <>
                </>
            )
        default:
            return null;
    }
}

export default Form;
