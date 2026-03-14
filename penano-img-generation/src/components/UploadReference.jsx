import { useState } from "react";

export default function UploadReference({ setImage }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h3>Upload Style Reference</h3>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
