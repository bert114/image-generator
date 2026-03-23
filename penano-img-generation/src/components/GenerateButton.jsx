export default function GenerateButton({
  image,
  prompt,
  model,
  setResult,
  textMode,
  size,
}) {
  const generate = async () => {
    try {
      const formData = new FormData();

      // Image is optional (text-to-image only)
      if (image) formData.append("image", image);

      formData.append("prompt", prompt);
      formData.append("model", model);

      // text-mode + size controls
      formData.append("textMode", String(!!textMode));
      formData.append("size", size || (textMode ? "1792x1024" : "1024x1024"));

      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // ✅ Prevent ResultGallery crash if images is missing
      setResult(Array.isArray(data.images) ? data.images : []);

      // Optional: show backend note (like fallback to img4)
      if (data.note) console.log(data.note);
      if (!res.ok) console.error("Generate failed:", data);
    } catch (err) {
      console.error(err);
      setResult([]); // keep UI stable
    }
  };

  return <button onClick={generate}>Generate Design</button>;

}