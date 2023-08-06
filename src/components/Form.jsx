function Form() {
    let counter = 0;
    const CVInformation = {
        firstName: "",
        secondName: "",
        emailAddress: "",
        phoneNumber: "",
        previousEducation: [],
        previousEmployment: [],
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

    return (
        <>
        
        </>
    )
}

export default Form