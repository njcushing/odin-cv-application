import { useState } from 'react'
import './../styles/Form.css'

import InputSingleLine from './InputSingleLine.jsx'

function Form() {
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

    switch (page) {
        case "Home":
            break;
        case "PersonalInfo":
            break;
        case "Education":
            break;
        case "Employment":
            break;
        case "HobbiesInterests":
            break;
        case "References":
            break;
        case "Review":
            break;
        case "Submitted":
            break;
        default:
            return null;
    }
}

export default Form