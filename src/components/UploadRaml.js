import { Box, Button, TextField } from "@mui/material";
import * as React from "react";

export default function UploadRaml({ onChange }) {

  return (
    <Box>
      <TextField
        id="outlined-read-only-input"
        onChange={(event) => onChange(event.target)}
        type={"file"}
      />
    </Box>
  );
}