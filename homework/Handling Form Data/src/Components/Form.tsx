import { useState } from "react";

const Form = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [textArea, setTextArea] = useState("");
  //   const [profession, setProfession] = useState("");
  //   const [lookingForAjob, setLookingForAjob] = useState(Boolean);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    textArea: "",
    profession: "",
    lookingForAjob: false,
  });

  //   const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFirstName(e.target.value);
  //   };

  //   const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setLastName(e.target.value);
  //   };

  //   const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setTextArea(e.target.value);
  //   };

  //   const handleProfession = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setProfession(e.target.value);
  //   };

  //   const handleLookingForAjob = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setLookingForAjob(e.target.checked);
  //   };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">About Me</label>
          <textarea
            name="textArea"
            id="aboutMe"
            onChange={handleForm}
            value={form.textArea}
          ></textarea>
        </div>
      </form>
      <div>
        <p>First Name: {form.firstName}</p>
        <p>Last Name {form.lastName}</p>
        <p>About me: {form.textArea}</p>
        <p>Profession: {form.profession}</p>
      </div>
      <div>
        <label htmlFor="LookingForAjob">Looking for a job?</label>
        <input type="checkbox" onChange={handleForm} name="lookingForAjob" />
        {form.lookingForAjob && (
          <select
            name="profession"
            id="professions"
            value={form.profession}
            onChange={handleForm}
          >
            <option value="">Choose profession</option>
            <option value="frontend-developer">frontend</option>
            <option value="backend-developer">backend</option>
            <option value="design-developer">design</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Form;
