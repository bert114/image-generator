import React from 'react'
import { useAppStore } from '../store/useAppStore';

function IdeaInput() {
  const {idea, setIdea, nextStep, prevStep} = useAppStore();
  
  return (
    <div>
      <h2>Step 2: Enter Idea</h2>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your idea"
        rows={5}
      />

      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep} disabled={!idea.trim()}>
          Continue
        </button>
      </div>
    </div>
  );

}

export default IdeaInput
