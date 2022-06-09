import { Box, Button, TextField } from "@mui/material";
import * as React from "react";

export default function DownloadAnchor({ fileBlob, filename }) {
  const a = React.useRef(null);

  React.useEffect(() => {
    if (fileBlob)
      a.current.click();
  }, [fileBlob]);
  return (
    <a ref={a} id="downloadAnchor" href={fileBlob && URL.createObjectURL(fileBlob)} download={`${filename}.html`}></a>
  );
}