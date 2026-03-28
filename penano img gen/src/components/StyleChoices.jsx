
import React from 'react'
import { useAppStore } from '../store/useAppStore';
import { fakeStyles } from '../data/fakeStyles';

export default function StyleChoices() {
  


  const {selectedStyle,setSelectedStyle,nextStep,prevStep} = useAppStore();

  return (
    <div>
      <h2>Step 3: Choose Style</h2>

      <div style={{ display: "flex", gap: "12px" }}>
        {fakeStyles.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style)}
            style={{
                border: selectedStyle?.id === style.id ? "2px solid white" : "1px solid #666",
                padding: "12px",
                background: "#1e1e1e",
                color: "white",
                cursor: "pointer",
            }}
            >
            {style.name}

          </button>
        ))}
      </div>

      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep} disabled={!selectedStyle}>
          Continue
        </button>
      </div>
    </div>
  );
}
