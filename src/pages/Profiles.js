import React, { useCallback, useRef, useState } from "react";
import Uploady from "@rpldy/uploady";
import UploadPreview from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";

const PreviewsWithClear = () => {
  const previewMethodsRef = useRef();
  const [previews, setPreviews] = useState([]);

  const onPreviewsChanged = useCallback((previews) => {
    setPreviews(previews);
  }, []);

  const onClear = useCallback(() => {
    if (previewMethodsRef.current?.clear) {
      previewMethodsRef.current.clear();
    }
  }, [previewMethodsRef]);

  return (
    <>
      <button className="btn btn-warning" onClick={onClear}>
        Clear {previews.length} previews
      </button>
      <br />

      <UploadPreview
        rememberPreviousBatches
        previewMethodsRef={previewMethodsRef}
        onPreviewsChanged={onPreviewsChanged}
      />
    </>
  );
};

function Profiles() {
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      <Uploady destination={{ url: "my-server.com/upload" }}>
        <UploadButton className="btn btn-success m-4" />
        <PreviewsWithClear />
      </Uploady>
    </div>
  );
}

export { Profiles };
