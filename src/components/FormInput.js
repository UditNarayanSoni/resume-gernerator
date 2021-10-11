import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { formAction } from "../actions/FormAction";
import "./FormInput.css";

const FormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [educations, setEducations] = useState("");
  const [projects, setProjects] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const val = e.target.name;

    if (val === "name") {
      setName(e.target.value);
    } else if (val === "email") {
      setEmail(e.target.value);
    } else if (val === "phone") {
      setPhone(e.target.value);
    } else if (val === "educations") {
      setEducations(e.target.value);
    } else if (val === "projects") {
      setProjects(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      educations: educations,
      projects: projects,
    };

    const moveData = () => {
      history.push("/formgenerated");
    };

    dispatch(formAction(formData, moveData));
  };

  return (
    <div className="formInput">
      <h1>Resume Generator</h1>
      <form onSubmit={handleSubmit}>
        Full Name{" "}
        <input
          value={name}
          onChange={handleOnChange}
          placeholder="Enter full name"
          name="name"
          type="text"
        />
        <br />
        <br />
        E-mail{" "}
        <input
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email"
          name="email"
          type="text"
        />
        <br />
        <br />
        Phon-No.{" "}
        <input
          value={phone}
          onChange={handleOnChange}
          placeholder="Enter phone-no."
          name="phone"
          type="text"
        />
        <br />
        <br />
        Educations{" "}
        <input
          value={educations}
          onChange={handleOnChange}
          placeholder="Educations Details"
          name="educations"
          type="text"
        />
        <br />
        <br />
        Projects{" "}
        <input
          value={projects}
          onChange={handleOnChange}
          placeholder="Projects Details"
          name="projects"
          type="text"
        />
        <br />
        <br />
        <input
          onChange={handleOnChange}
          type="submit"
          value="Generate Resume"
        />
      </form>
    </div>
  );
};

export default FormInput;
