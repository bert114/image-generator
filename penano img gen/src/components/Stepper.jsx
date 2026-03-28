
import React from 'react'
import { useAppStore } from '../store/useAppStore';

function Stepper() {
  const {currentStep} = useAppStore();

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Step {currentStep} of 4</p>
    </div>
  );
}

export default Stepper