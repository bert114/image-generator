export default function GenerateButton({
  image,
  prompt,
  model,
  setResult,
  textMode,
  size,
}) {
  const generate = async () => {
    const formData = new FormData();

    // Image is optional (text-to-image only)
    if (image) formData.append("image", image);

    formData.append("prompt", prompt);
    formData.append("model", model);

    // NEW: text-mode + size controls
    formData.append("textMode", String(!!textMode));
    formData.append("size", size || (textMode ? "1792x1024" : "1024x1024"));

    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.images);
  };

  return <button onClick={generate}>Generate Design</button>;

}