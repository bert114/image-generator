import express from "express";
import multer from "multer";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

const API_KEY = "infip-d0ddc233";

app.post("/generate", upload.single("image"), async (req, res) => {
  try {
    const { prompt, model } = req.body;

    const response = await fetch(
      "https://api.infip.pro/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          model: model || "img3",
          n: 2,
          size: "1024x1024",
        }),
      },
    );

    const data = await response.json();

    const images = data.data.map((img) => img.url);

    res.json({ images });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Generation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
