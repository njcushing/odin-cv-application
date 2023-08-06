import { useState } from 'react'
import './../styles/Form.css'

import InputSingleLine from './InputSingleLine.jsx'
import ButtonBasic from './ButtonBasic.jsx'

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
    const totalPages = 8;

    const [currentPage, setCurrentPage] = useState("PersonalInfo");
    const [personalInformation, setPersonalInformation] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
    });

    const classNames = {
        formSectionTitle: "cv-application-form-section-title",
        inputsArea: "cv-application-inputs-area",
        pageButtons: "cv-application-page-buttons",
    }

    switch (currentPage) {
        case "Home":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("PersonalInfo")}/>
                </div>
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
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Home")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Education")}/>
                </div>
                </>
            )
        case "Education":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("PersonalInfo")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Employment")}/>
                </div>
                </>
            )
        case "Employment":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Education")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("HobbiesInterests")}/>
                </div>
                </>
            )
        case "HobbiesInterests":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Employment")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("References")}/>
                </div>
                </>
            )
        case "References":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("HobbiesInterests")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Review")}/>
                </div>
                </>
            )
        case "Review":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("References")}/>
                    <ButtonBasic buttonText="Next Page" clickHandler={() => 
                        setCurrentPage("Submitted")}/>
                </div>
                </>
            )
        case "Submitted":
            return (
                <>
                <div className={classNames.pageButtons}>
                    <ButtonBasic buttonText="Previous Page" clickHandler={() => 
                        setCurrentPage("Review")}/>
                </div>
                </>
            )
        default:
            return null;
    }
}

export default Form;
