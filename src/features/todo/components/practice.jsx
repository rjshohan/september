import React from "react";

export const Greet = () => {
  return <h1>Assalamualaikum Bangladesh!</h1>;
};

const Student = (props) => {
  const { name, age, isStudent, salary } =props.studentObj;
  return (
    <div className="student">
      <h2>
        <p> Name: {name} </p>
        <p> Age: {age} </p>
        <p> Student: {isStudent ? "Yes" : "No"} </p>
        <p> Salary: {salary} </p>
      </h2>
    </div>
  );
};
export default Student;
