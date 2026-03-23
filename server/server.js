import express from "express";
import multer from "multer";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 

const upload = multer({ dest: "uploads/" });

const INFIP_API_KEY = process.env.INFIP_API_KEY;
if (!INFIP_API_KEY) throw new Error("Missing INFIP_API_KEY in .env");

// Helper: improves text-in-image success
function buildPrompt({ prompt, textMode }) {
  if (!textMode) return prompt;

  // Keep it simple, high-contrast, “exact text” rules
  return `${prompt}

Create a clean poster/sign with HIGH-CONTRAST, READABLE TYPOGRAPHY.
If the prompt includes words that must appear in the image, render them EXACTLY (no misspellings).
Use simple sans-serif font, large letters, centered layout, plain background behind text.
NO extra words, NO watermarks, NO random small print.`;
}

app.post("/generate", upload.single("image"), async (req, res) => {
  try {
    const {
      prompt,
      model = "img4",
      size,
      seed,
      textMode,
    } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing prompt" });
    }

    // For text-heavy images, a wider canvas helps readability
    const finalSize =
      size || (textMode ? "1792x1024" : "1024x1024");

    const finalPrompt = buildPrompt({
      prompt: prompt.trim(),
      textMode: textMode === true || textMode === "true",
    });

    const payload = {
      model,
      prompt: finalPrompt,
      n: 1,
      size: finalSize,
    };

    // Only include seed if provided (avoid sending undefined)
    if (seed !== undefined && seed !== null && seed !== "") {
      payload.seed = Number(seed);
    }

    const response = await fetch("https://api.infip.pro/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${INFIP_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Infip error:", data);
      return res.status(response.status).json({
        error: "Provider error",
        details: data,
      });
    }

    const images = Array.isArray(data?.data)
      ? data.data.map((img) => img.url).filter(Boolean)
      : [];

    if (images.length === 0) {
      return res.status(500).json({ error: "No images returned", raw: data });
    }

    res.json({ images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Generation failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});