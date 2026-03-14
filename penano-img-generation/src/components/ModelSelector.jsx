export default function ModelSelector({ model, setModel }) {
  return (
    <div>
      <h3>Select AI Model</h3>

      <select onChange={(e) => setModel(e.target.value)}>
        <option value="img3">Imagen 3</option>
        <option value="img4">Imagen 4</option>
        <option value="flux-schnell">Flux Schnell</option>
        <option value="sdxl">SDXL</option>
      </select>
    </div>
  );
}
