import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import PDF from "../images/cv.pdf";

function About() {
  return (
    <div>
      <h1>About Us </h1>
      <PDFViewer
        document={{
          base64: `${PDF}`,
        }}
      />
    </div>
  );
}
export { About };
