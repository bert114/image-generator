export default function ResultGallery({ results }) {
  return (
    <div>
      <h2>Generated Designs</h2>

      {results.map((img, i) => (
        <img key={i} src={img} width="250" />
      ))}
    </div>
  );
}
