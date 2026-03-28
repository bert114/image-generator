import { create } from "zustand";

export const useAppStore = create((set) => ({
  currentStep: 1,
  uploadedImage: null,
  imagePreview: "",
  idea: "",
  selectedStyle: null,

  setCurrentStep: (step) => set({ currentStep: step }),

  setUploadedImage: (file) =>
    set({
      uploadedImage: file,
      imagePreview: file ? URL.createObjectURL(file) : "",
    }),

  setIdea: (idea) => set({ idea }),

  setSelectedStyle: (style) => set({ selectedStyle: style }),

 

  nextStep: () => set((state) => ({currentStep: state.currentStep < 4 ? state.currentStep + 1 : 4,})),
  prevStep: () => set((state) => ({ currentStep: state.currentStep < 4 ? state.currentStep - 1 : 1, })),
}));