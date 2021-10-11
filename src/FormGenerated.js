import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FormGenerated = () => {
  const form = useSelector((state) => {
    return state.form;
  });

  return (
    <div>
      <h1>Resume</h1>
      <h2>{form.name}</h2>
      <h2>{form.email}</h2>
      <h2>{form.phone}</h2>
      <h2>Educations : {form.educations}</h2>
      <h2>Projects : {form.projects}</h2>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default FormGenerated;
