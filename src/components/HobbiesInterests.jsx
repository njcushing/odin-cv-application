import './../styles/HobbiesInterests.css';

import { v4 as uuidv4 } from 'uuid';
import TextBox from './TextBox.jsx';

const HobbiesInterests = ({

    hobbiesInterests = "",
    hobbiesInterestsChangeHandler,
    classNames = [],
    editMode = false,

}) => {

    const informationTextElement = (
        <h4
            className={["hobbies-interests-information-text"]}
        >
            Please tell us a little more about yourself using the box below
        </h4>
    )

    const hobbiesInterestsElement = (
        <TextBox
            label=""
            textBoxText={hobbiesInterests}
            textareaID="hobbies-interests"
            classNames={["hobbies-interests-textarea"]}
            changeHandler={hobbiesInterestsChangeHandler}
            resize="none"
            scrollable={true}
            maxLength={500}
            placeholder={"You have opted not to provide any additional information about yourself"}
            enabled={editMode}
        />
    )

    return (
        <div className={["HobbiesInterests"].concat(classNames).join(" ")} >
        {informationTextElement}
        {hobbiesInterestsElement}
        </div>
    )
}

export default HobbiesInterests;
