export default function ResultGallery({ result = [] }) {
  if (!Array.isArray(result) || result.length === 0) return null;

  return (
    <div>
      {result.map((imgUrl, idx) => (
        <img key={idx} src={imgUrl} alt={`Generated ${idx}`} />
      ))}
    </div>
  );
}
