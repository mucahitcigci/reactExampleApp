import React, { useState } from "react";
import PDF from "../images/cv.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
function About() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <h1>About Us </h1>
      <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export { About };
