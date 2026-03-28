import React from 'react'
import { useAppStore } from '../store/useAppStore';
import { fakeImages } from '../data/fakeImages';

function GeneratedImages() {
  const {prevStep} = useAppStore();

  return (
    <div>
      <h2>Step 4: Fake Results</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {fakeImages.map((img, index) => (
          <img key={index} src={img} alt={`Generated ${index + 1}`} width="200" />
        ))}
      </div>

      <div style={{ marginTop: "16px" }}>
        <button onClick={prevStep}>Back</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default GeneratedImages
