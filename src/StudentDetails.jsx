import React, { useState } from "react";

const StudentDetails = () => {
  const [studentInfo, setStateInfo] = useState({
    name: "Subek",
    age: 20,
    college: "everest",
  });
  return (
    <div>
      <h1>{studentInfo.name}</h1>
      <h3>Age:{studentInfo.age}</h3>
      <p>Enrolled college:{studentInfo.college}</p>

      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            const newName = event.target.value;
            setStateInfo({
              ...studentInfo,
              name: newName,
            });
          }}
        />
      </div>
    </div>
  );
};

export default StudentDetails;
