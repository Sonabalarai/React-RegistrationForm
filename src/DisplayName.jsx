import React, { useState } from "react";
import "./App.css";
import "./StudentDetails";
const DisplayName = () => {
  const [studentName, setStudentName] = useState("sona");
  return (
    <div>
      <h1>{studentName}</h1>
      <input
        type="text"
        onChange={(event) => {
          // console.log(event.target.value);
          const newValue = event.target.value;
          setStudentName(newValue);
        }}
      />
    </div>
  );
};

export default DisplayName;