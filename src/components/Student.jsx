import React from "react";
const Student = ({ ...student }) => {
  const { firstname, lastname, age, sex, year } = student;
  return (
    <div className="border border-solid border-teal-600 p-4">
      <h4 className="firstname">{firstname}</h4>
      <h3 className="lastname">{lastname}</h3>
      <p className="age">{age}</p>
      <p className="sex">{sex}</p>
      <p className="year">{year}</p>
    </div>
  );
};

export default Student;
