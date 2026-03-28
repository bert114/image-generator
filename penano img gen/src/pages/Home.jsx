import React from 'react'
import Stepper from '../components/Stepper'
import ImageUpload from '../components/ImageUpload'
import GeneratedImages from '../components/GeneratedImages'
import StyleChoices from '../components/StyleChoices'
import IdeaInput from '../components/IdeaInput'
import DownloadButton from '../components/DownloadButton'
import { useAppStore } from '../store/useAppStore'

function Home() {
  const currentStep = useAppStore((state) => state.currentStep);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <Stepper />

      {currentStep === 1 && <ImageUpload />}
      {currentStep === 2 && <IdeaInput />}
      {currentStep === 3 && <StyleChoices />}
      {currentStep === 4 && <GeneratedImages />}
    </div>
  );
}

export default Home