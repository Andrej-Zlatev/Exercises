import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [profession, setProfession] = useState("");

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  const handleProfession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfession(e.target.value);
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastName}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">About Me</label>
          <textarea
            name="About Me"
            id="aboutMe"
            onChange={handleTextArea}
            value={textArea}
          ></textarea>
        </div>
      </form>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name {lastName}</p>
        <p>About me: {textArea}</p>
        <p>Profession: {profession}</p>
      </div>
      <div>
        <select
          name="professions"
          id="professions"
          value={profession}
          onChange={handleProfession}
        >
          <option value="">Choose profession</option>
          <option value="frontend-developer">frontend</option>
          <option value="backend-developer">backend</option>
          <option value="design-developer">design</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
