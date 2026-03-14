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
  const [selectedStyle, setSelectedStyle] = useState("soft-luxury");
  const [selectedRatio, setSelectedRatio] = useState("4:5");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [bgRemove, setBgRemove] = useState(false);
  const [prompt, setPrompt] = useState(
    "Luxury skincare product photo on marble table, soft shadows, premium mood",
  );

  const style = useMemo(
    () => styleModes.find((s) => s.id === selectedStyle) || styleModes[0],
    [selectedStyle],
  );

  return (
    <div className="app-shell">
      <div className="bg-layer bg-layer--base" />
      <div className="bg-layer bg-layer--grid" />
      <div className="bg-orb bg-orb--left" />
      <div className="bg-orb bg-orb--right" />
      <div className="bg-orb bg-orb--top" />

      <div className="container">
        <header className="topbar">
          <div className="brand">
            <div className="brand__icon">
              <Layers3 size={18} />
            </div>
            <div className="brand__text">Lustre Studio</div>
          </div>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/">Generator</a>
            <a href="/">How It Works</a>
            <a href="/">Styles</a>
            <a href="/">Pricing</a>
          </nav>

          <button className="primary-btn">Start Creating</button>
        </header>

        <section className="hero">
          <div className="hero__spotlight hero__spotlight--left" />
          <div className="hero__spotlight hero__spotlight--right" />
          <div className="hero__curve hero__curve--left" />
          <div className="hero__curve hero__curve--right" />

          <div className="hero__content">
            <div className="hero__badge">
              <Sparkles size={13} />
              <span>Consistent visual generation platform</span>
            </div>

            <h1>Create The Visual Before The Campaign Launches</h1>

            <p>
              Generate polished AI visuals using prompts, inspiration images,
              brand colors, and curated style modes built for editors,
              designers, and marketers.
            </p>

            <div className="hero__actions">
              <button className="primary-btn large">Start Creating</button>
              <button className="secondary-btn large">
                Explore Style Modes
              </button>
            </div>

            <div className="hero__lines">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="stats-grid">
              {[
                ["Brand palettes saved", "120+"],
                ["Generation consistency", "95%"],
                ["Creative workflow", "Fast"],
              ].map(([label, value]) => (
                <div className="stat-card" key={label}>
                  <div className="stat-card__label">{label}</div>
                  <div className="stat-card__value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section intro">
          <div className="section-heading center">
            <div className="eyebrow">What is Lustre Studio?</div>
            <h2>A style-consistent AI image generator for creative teams</h2>
            <p>
              Upload inspiration, describe your output, set brand colors, choose
              a style mode, and generate polished campaign-ready visuals with a
              fast, desktop-first workflow.
            </p>
          </div>

          <div className="feature-grid feature-grid--two">
            <CardGlow className="feature-card feature-card--large">
              <div className="feature-visual feature-visual--upload">
                <div className="feature-visual__circle">
                  <div className="feature-visual__inner" />
                  <Upload size={28} />
                </div>
              </div>
              <div>
                <h3>Inspiration-led generation</h3>
                <p>
                  Use uploaded references for mood, texture, lighting, and
                  composition direction without turning the experience into
                  identity copying.
                </p>
              </div>
            </CardGlow>

            <CardGlow className="feature-card feature-card--large">
              <div className="feature-visual feature-visual--icons">
                {[Palette, SwatchBook, Sparkles, GalleryVerticalEnd].map(
                  (Icon, i) => (
                    <div
                      className={`mini-icon ${i === 2 ? "mini-icon--active" : ""}`}
                      key={i}
                    >
                      <Icon size={20} />
                    </div>
                  ),
                )}
              </div>
              <div>
                <h3>Color and style control</h3>
                <p>
                  Match brand palettes, apply curated visual modes, and keep
                  outputs aligned across social creatives, posters, moodboards,
                  and ads.
                </p>
              </div>
            </CardGlow>
          </div>

          <div className="feature-grid feature-grid--three">
            {[
              [
                PanelTop,
                "Prompt helper",
                "Turns rough ideas into polished generation prompts.",
              ],
              [
                Shield,
                "Safe reference use",
                "Keeps the product focused on mood, not identity copying.",
              ],
              [
                Clock3,
                "Fast output flow",
                "Generate 4 refined visuals with one clean action.",
              ],
            ].map(([Icon, title, body]) => (
              <CardGlow className="feature-card" key={title}>
                <div className="feature-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </CardGlow>
            ))}
          </div>
        </section>

        <section className="section generator-section">
          <div className="section-heading center">
            <div className="eyebrow">Generator workspace</div>
            <h2>A premium control panel with polished visual output</h2>
          </div>

          <div className="generator-layout">
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardGlow className="control-panel">
                <div className="control-panel__intro">
                  <div className="control-panel__top">
                    <div>
                      <div className="tiny-label">Homepage promise</div>
                      <h3>
                        Create consistent AI visuals from inspiration and brand
                        colors.
                      </h3>
                    </div>
                    <div className="desktop-badge">Desktop first</div>
                  </div>
                  <p>
                    Upload a mood reference, add your prompt and palette, then
                    generate polished visuals in curated styles.
                  </p>
                </div>

                <div className="control-stack">
                  <section>
                    <SectionLabel
                      icon={Wand2}
                      title="Prompt"
                      action="Prompt helper"
                    />
                    <div className="input-card">
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="What do you want to create? Describe the subject, mood, lighting, and overall feel."
                      />
                      <div className="pill-row">
                        <Pill>Product shot</Pill>
                        <Pill>Poster</Pill>
                        <Pill>Campaign visual</Pill>
                        <Pill>Social creative</Pill>
                      </div>
                    </div>
                  </section>

                  <section>
                    <SectionLabel
                      icon={Upload}
                      title="Inspiration image"
                      action="Use reference"
                    />
                    <div className="upload-card">
                      <div className="upload-card__thumb">
                        <ImageIcon />
                      </div>
                      <div className="upload-card__content">
                        <h4>Upload mood or lighting reference</h4>
                        <p>
                          Keep the style, composition vibe, and texture — not
                          identity or face copying.
                        </p>
                        <button className="secondary-chip">
                          <Upload size={13} />
                          Add reference
                        </button>
                      </div>
                    </div>
                  </section>

                  <section>
                    <SectionLabel
                      icon={Palette}
                      title="Brand colors"
                      action="Save preset"
                    />
                    <div className="input-card">
                      <div className="palette-grid">
                        {paletteDefaults.map((color) => (
                          <div className="palette-item" key={color}>
                            <div
                              className="palette-item__swatch"
                              style={{ backgroundColor: color }}
                            />
                            <div className="palette-item__code">{color}</div>
                          </div>
                        ))}
                      </div>
                      <div className="pill-row">
                        <Pill active>Cool Luxe</Pill>
                        <Pill>Monochrome</Pill>
                        <Pill>Blue Editorial</Pill>
                      </div>
                    </div>
                  </section>

                  <section>
                    <SectionLabel icon={Sparkles} title="Style mode" />
                    <div className="style-grid">
                      {styleModes.map((mode) => {
                        const active = selectedStyle === mode.id;
                        return (
                          <button
                            key={mode.id}
                            className={`style-card ${active ? "active" : ""}`}
                            onClick={() => setSelectedStyle(mode.id)}
                          >
                            <div
                              className={`style-card__preview ${mode.accent}`}
                            />
                            <div className="style-card__row">
                              <div className="style-card__title">
                                {mode.name}
                              </div>
                              {active && (
                                <div className="style-card__check">
                                  <Check size={13} />
                                </div>
                              )}
                            </div>
                            <p>{mode.tone}</p>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section>
                    <SectionLabel icon={ImageIcon} title="Aspect ratio" />
                    <div className="ratio-row">
                      {ratios.map((ratio) => (
                        <button
                          key={ratio}
                          className={`ratio-btn ${selectedRatio === ratio ? "active" : ""}`}
                          onClick={() => setSelectedRatio(ratio)}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="advanced-card">
                    <button
                      className="advanced-card__header"
                      onClick={() => setAdvancedOpen((v) => !v)}
                    >
                      <div className="advanced-card__title">
                        <div className="section-label__icon">
                          <SlidersHorizontal size={14} />
                        </div>
                        <span>Advanced settings</span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={advancedOpen ? "chevron open" : "chevron"}
                      />
                    </button>

                    {advancedOpen && (
                      <div className="advanced-card__body">
                        <div>
                          <div className="tiny-label">Negative prompt</div>
                          <div className="soft-box">
                            blurry, distorted, crowded background, extra
                            objects, low quality
                          </div>
                        </div>

                        <div className="toggle-row">
                          <div>
                            <div className="toggle-row__title">
                              Remove background after generation
                            </div>
                            <div className="toggle-row__text">
                              Useful for ads, product comps, and layered
                              creative work
                            </div>
                          </div>

                          <button
                            className={`toggle ${bgRemove ? "active" : ""}`}
                            onClick={() => setBgRemove((v) => !v)}
                          >
                            <span />
                          </button>
                        </div>
                      </div>
                    )}
                  </section>

                  <button className="generate-btn">
                    <div>
                      <div className="generate-btn__sub">
                        1-click generation
                      </div>
                      <div className="generate-btn__title">
                        Generate 4 visuals
                      </div>
                    </div>
                    <div className="generate-btn__icon">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </CardGlow>
            </motion.aside>

            <motion.main
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="results-panel"
            >
              <CardGlow className="results-card">
                <div className="results-card__top">
                  <div>
                    <div className="tiny-label">Current setup</div>
                    <div className="results-card__title-row">
                      <h3>{style.name}</h3>
                      <span className="tiny-tag">{selectedRatio}</span>
                      {bgRemove && (
                        <span className="tiny-tag tiny-tag--accent">
                          Background removal on
                        </span>
                      )}
                    </div>
                    <p>
                      Tailored for editors, designers, and marketers creating
                      social posts, ad creatives, campaign visuals, and
                      editorial-style imagery with consistent mood.
                    </p>
                  </div>

                  <div className="pill-row">
                    <Pill active>4 outputs</Pill>
                    <Pill>Fast mode</Pill>
                    <Pill>Consistent style</Pill>
                  </div>
                </div>

                <div className="results-grid">
                  {sampleImages.map((image, index) => (
                    <motion.div
                      key={image.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      className="result-item"
                    >
                      <div
                        className="result-item__visual"
                        style={{ background: image.bg }}
                      >
                        <div className="result-item__badge">
                          Output {index + 1}
                        </div>
                        <div className="result-item__glass" />
                        <div className="result-item__shadow" />
                      </div>

                      <div className="result-item__overlay">
                        <div className="result-item__overlay-top">
                          <div>
                            <div className="result-item__name">
                              {image.title}
                            </div>
                            <div className="result-item__meta">
                              {image.subtitle}
                            </div>
                          </div>
                          <button className="mini-pill">Similar</button>
                        </div>

                        <div className="result-item__actions">
                          <ActionButton icon={Download} label="Download" />
                          <ActionButton icon={Scissors} label="Remove BG" />
                          <ActionButton icon={Palette} label="Recolor" />
                          <ActionButton
                            icon={RefreshCcw}
                            label="Generate similar"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardGlow>
            </motion.main>
          </div>
        </section>

        <section className="section">
          <div className="section-heading center">
            <h2>How it works</h2>
            <p>
              A clear flow for designers and marketers: guide the image, lock in
              the visual tone, and generate campaign-ready outputs without
              digging through technical controls.
            </p>
          </div>

          <div className="feature-grid feature-grid--three">
            {[
              [
                Search,
                "Track the inspiration",
                "Upload a reference to guide mood, composition, texture, and lighting direction.",
              ],
              [
                Sparkles,
                "Detect the style",
                "Choose from curated visual modes designed for polished and repeatable output.",
              ],
              [
                Palette,
                "Apply brand colors",
                "Set your palette manually with hex codes or saved presets for consistency.",
              ],
              [
                Wand2,
                "Refine the prompt",
                "Use prompt helper to turn rough ideas into stronger creative direction.",
              ],
              [
                ImageIcon,
                "Generate the results",
                "Create 4 visual options in one clean, focused generation flow.",
              ],
              [
                Shield,
                "Polish for delivery",
                "Remove backgrounds, recolor assets, and generate similar variations fast.",
              ],
            ].map(([Icon, title, body]) => (
              <CardGlow className="feature-card" key={title}>
                <div className="feature-card__icon">
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </CardGlow>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
