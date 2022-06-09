import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UploadRaml from './components/UploadRaml';
import Copyright from './components/Copyright';
import UploadButton from './components/UploadButton';
import config from './env';
import DownloadAnchor from './components/DownloadAnchor';

export default function App() {
  const [fileInput, setFileInput] = React.useState(null);
  const [html, setHtml] = React.useState(null);

  const setNewFile = (target) => {
    setFileInput(target);
  };

  const uploadFile = async () => {
    console.log(fileInput.files[0]);
    const formData = new FormData();
    formData.append("ramlFile", fileInput.files[0]);
    const response = await (await fetch(config.serverHost + "/api/v1/raml", { method: "POST", body: formData })).blob();
    setHtml(response);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ramltohtml
        </Typography>
        <UploadRaml onChange={setNewFile} />
        <UploadButton onClick={uploadFile} isDisabled={!fileInput}></UploadButton>
        <DownloadAnchor fileBlob={html} filename={fileInput ? fileInput.files[0].name.split(".")[0] : "api_documentation"}></DownloadAnchor>
        <Copyright />
      </Box>
    </Container>
  );
}
