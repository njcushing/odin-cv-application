import { useState } from 'react';
import './../styles/Form.css';

import { v4 as uuidv4 } from 'uuid';
import ButtonBasic from './ButtonBasic.jsx';
import PersonalInformation from './PersonalInformation.jsx';
import PreviousEducation from './PreviousEducation.jsx';
import PreviousEmployment from './PreviousEmployment.jsx';
import Reference from './Reference.jsx';
import HobbiesInterests from './HobbiesInterests.jsx';

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
    const [editSection, setEditSection] = useState({
        personalInformation: false,
        previousEducation: false,
        previousEmployment: false,
        hobbiesInterests: false,
        references: false,
    })

    const classNames = {
        formContainer: "cv-application-form-container",
        formSectionTitle: "cv-application-form-section-title",
        textRegular: "cv-application-text-regular",
        personalInfoContainer: "cv-application-personal-info-container",
        previousEducationPage: "cv-application-previous-education-page",
        previousEducationContainer: "cv-application-previous-education-container",
        previousEducationElement: "cv-application-previous-education-element",
        previousEmploymentPage: "cv-application-previous-employment-container",
        previousEmploymentContainer: "cv-application-previous-employment-container",
        previousEmploymentElement: "cv-application-previous-employment-element",
        hobbiesInterestsContainer: "cv-application-hobbies-interests-container",
        referencesPage: "cv-application-references-container",
        referencesContainer: "cv-application-references-container",
        referencesElement: "cv-application-references-element",
        inputsArea: "cv-application-inputs-area",
        getStartedButton: "cv-application-get-started-button",
        addFieldButton: "cv-application-add-field-button",
        requiredFieldWarning: "cv-application-required-field-warning",
        pageButtons: "cv-application-page-buttons",
        reviewSectionContainer: "cv-application-review-section-container",
        reviewSectionTitle: "cv-application-review-section-title",
        reviewSectionEmptyWarning: "cv-application-review-section-empty-warning",
        editSectionButton: "cv-application-edit-section-button",
        submitButton: "cv-application-submit-button",
    }

    const sectionTitle = (title) => <h2 className={classNames.formSectionTitle}>{title}</h2>
    const textRegular = (text) => <h4 className={classNames.textRegular}>{text}</h4>

    const getStartedButton = (
        <div className={classNames.getStartedButton}>
            <ButtonBasic buttonText="Get Started" clickHandler={() => 
                setCurrentPage("PersonalInfo")}/>
        </div>
    )

    const requiredFieldWarning = (
        <div className={classNames.requiredFieldWarning}>
            Any field marked by an asterisk (*) is a <strong>required</strong> field.
        </div>
    )

    const personalInfoComponent = (editMode = true) => { return(
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
            editMode={editMode}
        />
    )}

    const previousEducationComponent = (editMode = true) => { return(
        <div className={classNames.previousEducationContainer}>
        {[...previousEducation.keys()].map((uniqueID) => {
            const education = previousEducation.get(uniqueID);
            return (<PreviousEducation
                institution={education.institution}
                institutionChangeHandler={(e) => {
                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                    previousEducationCopy.get(uniqueID).institution = e.target.value;
                    setPreviousEducation(previousEducationCopy);
                }}
                qualifications={education.qualifications}
                qualificationsChangeHandler={(e) => {
                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                    previousEducationCopy.get(uniqueID).qualifications = e.target.value;
                    setPreviousEducation(previousEducationCopy);
                }}
                startDate={education.startDate}
                startDateChangeHandler={(e) => {
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
                endDate={education.endDate}
                endDateChangeHandler={(e) => {
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
                deleteButtonClickHandler={() => {
                    var previousEducationCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEducation))));
                    previousEducationCopy.delete(uniqueID);
                    setPreviousEducation(previousEducationCopy);
                }}
                classNames={[classNames.previousEducationElement]}
                editMode={editMode}
                key={uniqueID}
            />)
        })}
        </div>
    )}

    const createNewPreviousEducationButton = (
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
    )

    const previousEmploymentComponent = (editMode = true) => { return(
        <div className={classNames.previousEmploymentContainer}>
            {[...previousEmployment.keys()].map((uniqueID) => {
                const employment = previousEmployment.get(uniqueID);
                return (
                    <PreviousEmployment
                        companyName={employment.company}
                        companyNameChangeHandler={(e) => {
                            var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                            previousEmploymentCopy.get(uniqueID).company = e.target.value;
                            setPreviousEmployment(previousEmploymentCopy);
                        }}
                        role={employment.role}
                        roleChangeHandler={(e) => {
                            var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                            previousEmploymentCopy.get(uniqueID).role = e.target.value;
                            setPreviousEmployment(previousEmploymentCopy);
                        }}
                        responsibilities={employment.responsibilities}
                        responsibilitiesChangeHandler={(e) => {
                            var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                            previousEmploymentCopy.get(uniqueID).responsibilities = e.target.value;
                            setPreviousEmployment(previousEmploymentCopy);
                        }}
                        startDate={employment.startDate}
                        startDateChangeHandler={(e) => {
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
                        endDate={employment.endDate}
                        endDateChangeHandler={(e) => {
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
                        deleteButtonClickHandler={() => {
                            var previousEmploymentCopy = new Map(JSON.parse(JSON.stringify(Array.from(previousEmployment))));
                            previousEmploymentCopy.delete(uniqueID);
                            setPreviousEmployment(previousEmploymentCopy);
                        }}
                        classNames={[classNames.previousEmploymentElement]}
                        editMode={editMode}
                        key={uniqueID}
                    />
                )
            })}
        </div>
    )}

    const createNewPreviousEmploymentButton = (
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
    )

    const hobbiesInterestsComponent = (editMode = true) => { return(
        <HobbiesInterests
            hobbiesInterests={hobbiesInterests}
            hobbiesInterestsChangeHandler={(e) => setHobbiesInterests(e.target.value)}
            classNames={[classNames.hobbiesInterestsContainer]}
            editMode={editMode}
        />
    )}

    const referencesComponent = (editMode = true) => { return(
        <div className={classNames.referencesContainer}>
            {[...references.keys()].map((uniqueID) => {
                const reference = references.get(uniqueID);
                return (
                    <Reference
                        firstNames={reference.firstName}
                        firstNamesChangeHandler={(e) => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.get(uniqueID).firstName = e.target.value;
                            setReferences(referencesCopy);
                        }}
                        lastName={reference.lastName}
                        lastNameChangeHandler={(e) => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.get(uniqueID).lastName = e.target.value;
                            setReferences(referencesCopy);
                        }}
                        relationship={reference.relationship}
                        relationshipChangeHandler={(e) => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.get(uniqueID).relationship = e.target.value;
                            setReferences(referencesCopy);
                        }}
                        emailAddress={reference.emailAddress}
                        emailAddressChangeHandler={(e) => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.get(uniqueID).emailAddress = e.target.value;
                            setReferences(referencesCopy);
                        }}
                        phoneNumber={reference.phoneNumber}
                        phoneNumberChangeHandler={(e) => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.get(uniqueID).phoneNumber = e.target.value;
                            setReferences(referencesCopy);
                        }}
                        deleteButtonChangeHandler={() => {
                            var referencesCopy = new Map(JSON.parse(JSON.stringify(Array.from(references))));
                            referencesCopy.delete(uniqueID);
                            setReferences(referencesCopy);
                        }}
                        classNames={[classNames.referencesElement]}
                        editMode={editMode}
                        key={uniqueID}
                    />
                )
            })}
        </div>
    )}

    const createNewReferenceButton = (
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
    )

    const editSectionButton = (sectionName) => {

        let buttonText, clickHandler;
        switch(sectionName) {
            case "personalInformation":
                buttonText = editSection.personalInformation ? "Done" : "Edit";
                clickHandler = () => setEditSection(
                    { ...editSection, personalInformation: !editSection.personalInformation }
                )
                break;
            case "previousEducation":
                buttonText = editSection.previousEducation ? "Done" : "Edit";
                clickHandler = () => setEditSection(
                    { ...editSection, previousEducation: !editSection.previousEducation }
                )
                break;
            case "previousEmployment":
                buttonText = editSection.previousEmployment ? "Done" : "Edit";
                clickHandler = () => setEditSection(
                    { ...editSection, previousEmployment: !editSection.previousEmployment }
                )
                break;
            case "hobbiesInterests":
                buttonText = editSection.hobbiesInterests ? "Done" : "Edit";
                clickHandler = () => setEditSection(
                    { ...editSection, hobbiesInterests: !editSection.hobbiesInterests }
                )
                break;
            case "references":
                buttonText = editSection.references ? "Done" : "Edit";
                clickHandler = () => setEditSection(
                    { ...editSection, references: !editSection.references }
                )
                break;
            default:
                break;
        }

        return (
            <div className={classNames.editSectionButton}>
                <ButtonBasic
                    buttonText={buttonText}
                    clickHandler={clickHandler}
                />
            </div>
        )
    }

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

    const submitButton = () => {
        return (
            <div className={classNames.submitButton}>
                <ButtonBasic
                    buttonText={"Submit"}
                    clickHandler={() => {
                        return null;
                    }}
                />
            </div>
        )
    }

    switch (currentPage) {
        case "Home":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("CV Application")}
                {textRegular("Click the button below to get started")}
                {getStartedButton}
                </div>
            )
        case "PersonalInfo":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Personal Information")}
                {requiredFieldWarning}
                {personalInfoComponent()}
                {pageButtons("Home", "Education")}
                </div>
            )
        case "Education":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Education")}
                {requiredFieldWarning}
                <div className={classNames.previousEducationPage}>
                {previousEducationComponent()}
                {createNewPreviousEducationButton}
                </div>
                {pageButtons("PersonalInfo", "Employment")}
                </div>
            )
        case "Employment":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Previous Employment")}
                {requiredFieldWarning}
                <div className={classNames.previousEmploymentPage}>
                {previousEmploymentComponent()}
                {createNewPreviousEmploymentButton}
                </div>
                {pageButtons("Education", "HobbiesInterests")}
                </div>
            )
        case "HobbiesInterests":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Hobbies & Interests")}
                {requiredFieldWarning}
                {hobbiesInterestsComponent()}
                {pageButtons("Employment", "References")}
                </div>
            )
        case "References":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Personal References")}
                {requiredFieldWarning}
                <div className={classNames.referencesPage}>
                {referencesComponent()}
                {createNewReferenceButton}
                </div>
                {pageButtons("HobbiesInterests", "Review")}
                </div>
            )
        case "Review":
            return (
                <div className={classNames.formContainer}>
                {sectionTitle("Review Your Information")}
                {requiredFieldWarning}

                <div className={classNames.reviewSectionContainer}>
                <div className={classNames.reviewSectionTitle}>Personal Information</div>
                {editSectionButton("personalInformation")}
                {personalInfoComponent(editSection.personalInformation)}
                </div>

                <div className={classNames.reviewSectionContainer}>
                <div className={classNames.reviewSectionTitle}>Previous Education</div>
                {editSectionButton("previousEducation")}
                {previousEducationComponent(editSection.previousEducation)}
                {previousEducation.size === 0
                    ?   <div className={classNames.reviewSectionEmptyWarning}>
                            You have opted not to provide any information regarding your education history.
                        </div>
                    : null
                }
                {editSection.previousEducation ? createNewPreviousEducationButton : null}
                </div>

                <div className={classNames.reviewSectionContainer}>
                <div className={classNames.reviewSectionTitle}>Previous Employment</div>
                {editSectionButton("previousEmployment")}
                {previousEmploymentComponent(editSection.previousEmployment)}
                {previousEmployment.size === 0
                    ?   <div className={classNames.reviewSectionEmptyWarning}>
                            You have opted not to provide any information regarding your employment history.
                        </div>
                    : null
                }
                {editSection.previousEmployment ? createNewPreviousEmploymentButton : null}
                </div>

                <div className={classNames.reviewSectionContainer}>
                <div className={classNames.reviewSectionTitle}>Hobbies & Interests</div>
                {editSectionButton("hobbiesInterests")}
                {hobbiesInterestsComponent(editSection.hobbiesInterests)}
                </div>

                <div className={classNames.reviewSectionContainer}>
                <div className={classNames.reviewSectionTitle}>Personal References</div>
                {editSectionButton("references")}
                {referencesComponent(editSection.references)}
                {references.size === 0
                    ?   <div className={classNames.reviewSectionEmptyWarning}>
                            You have opted not to provide any personal references.
                        </div>
                    : null
                }
                {editSection.references ? createNewReferenceButton : null}
                </div>
                {submitButton()}
                </div>
            )
        case "Submitted":
            return (
                <div className={classNames.formContainer}>
                <div></div>
                </div>
            )
        default:
            return null;
    }
}

export default Form;
