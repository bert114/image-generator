export default function GenerateButton({ image, prompt, model, setResult }) {
  const generate = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);
    formData.append("model", model);

    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.images);
  };

  return <button onClick={generate}>Generate Design</button>;
}
