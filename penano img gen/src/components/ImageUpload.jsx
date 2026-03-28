import React from 'react'
import { useAppStore } from '../store/useAppStore';

function ImageUpload() {
  
  const {imagePreview, setUploadedImage, nextStep} = useAppStore();

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedImage(file);
  };




  return (
    <div>
      <h2>Step 1: Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleChange} />

      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Preview" width="200" />
        </div>
      )}

      <button onClick={nextStep} disabled={!imagePreview}>
        Continue
      </button>
    </div>
  );
}

export default ImageUpload
