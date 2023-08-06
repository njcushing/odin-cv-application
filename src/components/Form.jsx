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
    const [personalInformation, setPersonalInformation] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
    });

    switch (page) {
        case "Home":
            return (
                <>
                <h2>Personal Information</h2>
                <InputSingleLine
                    labelText="First Name(s): "
                    inputValue={personalInformation.firstName}
                    changeHandler={(e) => setPersonalInformation(
                        { ...personalInformation, firstName: e.target.value }
                    )}
                />
                <InputSingleLine
                    labelText="Last Name: "
                    inputValue={personalInformation.lastName}
                    changeHandler={(e) => setPersonalInformation(
                        { ...personalInformation, lastName: e.target.value }
                    )}
                />
                </>
            )
        case "PersonalInfo":
            return (
                <>
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

export default Form