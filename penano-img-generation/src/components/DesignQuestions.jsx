export default function DesignQuestions({ prompt, setPrompt }) {
  return (
    <div>
      <h3>Describe your design</h3>

      <textarea
        placeholder="Example: create modern fintech app icons"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
}
