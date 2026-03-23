import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Wand2,
  Upload,
  Palette,
  Sparkles,
  Image as ImageIcon,
  ChevronDown,
  Download,
  Scissors,
  RefreshCcw,
  Clock3,
  SlidersHorizontal,
  Layers3,
  Search,
  ArrowRight,
  Check,
  PanelTop,
  Shield,
  SwatchBook,
  GalleryVerticalEnd,
} from "lucide-react";
import "./scss/main.scss";
import HomePage from "./components/Homepage";
import ModelSelector from "./components/ModelSelector";
import DesignQuestions from "./components/DesignQuestions";
import UploadReference from "./components/UploadReference";
import ResultGallery from "./components/ResultGallery";
import GenerateButton from "./components/GenerateButton";

const styleModes = [
  {
    id: "editorial",
    name: "Editorial",
    tone: "Magazine-clean, premium, polished",
    accent: "editorial",
  },
  {
    id: "cinematic",
    name: "Cinematic",
    tone: "Dramatic mood, richer shadows",
    accent: "cinematic",
  },
  {
    id: "soft-luxury",
    name: "Soft Luxury",
    tone: "Elegant, pastel, high-end",
    accent: "soft-luxury",
  },
  {
    id: "bold-ad",
    name: "Bold Ad",
    tone: "Punchy, sharp, campaign-ready",
    accent: "bold-ad",
  },
  {
    id: "minimal-studio",
    name: "Minimal Studio",
    tone: "Clean background, modern product look",
    accent: "minimal-studio",
  },
  {
    id: "dreamy-art",
    name: "Dreamy Art",
    tone: "Soft, imaginative, aesthetic",
    accent: "dreamy-art",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    tone: "Magical, surreal, story-driven",
    accent: "fantasy",
  },
  {
    id: "watercolor",
    name: "Watercolor",
    tone: "Painterly and expressive",
    accent: "watercolor",
  },
];

const ratios = ["1:1", "4:5", "16:9", "9:16", "3:4"];

const historyItems = [
  "Luxury skincare marble scene",
  "Modern perfume poster concept",
  "Pastel fashion campaign mood",
  "Editorial coffee product shot",
];

const sampleImages = [
  {
    title: "Editorial perfume poster",
    subtitle: "Soft Luxury · 4:5",
    bg: "linear-gradient(180deg,#0d173f 0%,#182d82 35%,#698dff 68%,#d5e0ff 100%)",
  },
  {
    title: "Skincare ad visual",
    subtitle: "Minimal Studio · 1:1",
    bg: "linear-gradient(180deg,#08112f 0%,#17306f 38%,#5c81ff 72%,#d7e4ff 100%)",
  },
  {
    title: "Dreamy campaign art",
    subtitle: "Dreamy Art · 16:9",
    bg: "linear-gradient(180deg,#101646 0%,#28379a 40%,#8d88ff 70%,#d9ddff 100%)",
  },
  {
    title: "Bold ad creative",
    subtitle: "Bold Ad · 9:16",
    bg: "linear-gradient(180deg,#071133 0%,#17358a 40%,#4d8bff 72%,#d3e4ff 100%)",
  },
];

const paletteDefaults = ["#DCE6FF", "#6E8DFF", "#18328E", "#050B22"];

function Pill({ children, active = false }) {
  return (
    <button className={`pill ${active ? "active" : ""}`}>{children}</button>
  );
}

function SectionLabel({ icon: Icon, title, action }) {
  return (
    <div className="section-label">
      <div className="section-label__left">
        <div className="section-label__icon">
          <Icon size={14} />
        </div>
        <h3>{title}</h3>
      </div>
      {action && <button className="section-label__action">{action}</button>}
    </div>
  );
}

function CardGlow({ children, className = "" }) {
  return <div className={`card-glow ${className}`}>{children}</div>;
}

function ActionButton({ icon: Icon, label }) {
  return (
    <button className="action-button">
      <Icon size={13} />
      <span>{label}</span>
    </button>
  );
}

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("img4");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);

  const [textMode, setTextMode] = useState(false);
  const [size, setSize] = useState("1024x1024");
  

  return (
    
    <div>
      <ModelSelector model={model} setModel={setModel} />
      <DesignQuestions prompt={prompt} setPrompt={setPrompt} />
      <UploadReference setImage={setImage} />


      <div style={{ margin: "12px 0" }}>
      <label style={{ display: "block", marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={textMode}
          onChange={(e) => {
            const on = e.target.checked;
            setTextMode(on);
            if (on) setSize("1792x1024");
          }}
        />{" "}
        Text accuracy mode (better text-in-image)
      </label>

      <label style={{ display: "block" }}>
        Size:{" "}
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="1024x1024">1024×1024 (square)</option>
          <option value="1792x1024">1792×1024 (wide)</option>
          <option value="1024x1792">1024×1792 (tall)</option>
        </select>
      </label>
    </div>

      {/* ✅ PUT IT HERE: wherever your “Generate” button should appear */}
      <GenerateButton
        image={image}
        prompt={prompt}
        model={model}
        setResult={setResult}
        textMode={textMode}
        size={size}
      />

      <ResultGallery result={result} />
    </div>
  );
}
