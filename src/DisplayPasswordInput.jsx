import PasswordInput from "@/components/formComponents/PasswordInput";
import { useState } from "react";

const DisplayPasswordInput = () => {
  const [password, setPassword] = useState("");

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "4rem 0" }}
    >
      <PasswordInput
        password={password}
        handlePassword={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default DisplayPasswordInput;
