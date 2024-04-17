import React from "react";
import { TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <div>
      <TextField
        variant="filled"
        label="filled "
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <TextField variant="outlined" label="outlined" />
      <TextField variant="standard" label="standard" />
    </div>
  );
};

export default MuiTextField;
