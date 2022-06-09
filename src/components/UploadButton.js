import { Box, Button, TextField } from "@mui/material";
import * as React from "react";

export default function UploadButton({ onClick, isDisabled }) {

  return (
    <Box>
      <Button
        size="large"
        variant="contained"
        onClick={onClick}
        disabled={isDisabled}
      >Convert
      </Button>
    </Box>
  );
}