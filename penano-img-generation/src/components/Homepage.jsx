import React from "react";
import {
  Sparkles,
  Upload,
  Palette,
  Wand2,
  Scissors,
  ArrowRight,
  Layers3,
  Check,
} from "lucide-react";

const styleModes = [
  {
    name: "Editorial",
    desc: "Clean, premium, magazine-like visuals.",
    cls: "editorial",
  },
  {
    name: "Cinematic",
    desc: "Dramatic lighting and richer mood.",
    cls: "cinematic",
  },
  {
    name: "Soft Luxury",
    desc: "Elegant, polished, and high-end.",
    cls: "soft-luxury",
  },
  {
    name: "Bold Ad",
    desc: "Punchy, high-contrast, campaign-ready.",
    cls: "bold-ad",
  },
  {
    name: "Minimal Studio",
    desc: "Clean backgrounds for product-style shots.",
    cls: "minimal-studio",
  },
  {
    name: "Dreamy Art",
    desc: "Soft, imaginative, aesthetic visuals.",
    cls: "dreamy-art",
  },
  {
    name: "Fantasy",
    desc: "Surreal, magical, story-driven imagery.",
    cls: "fantasy",
  },
  {
    name: "Watercolor",
    desc: "Painterly and expressive artistic style.",
    cls: "watercolor",
  },
];

const features = [
  {
    icon: Wand2,
    title: "Prompt Helper",
    desc: "Turn rough ideas into polished prompts for stronger outputs.",
  },
  {
    icon: Upload,
    title: "Inspiration Upload",
    desc: "Use mood, lighting, and composition references to guide style.",
  },
  {
    icon: Palette,
    title: "Hex Color Palette",
    desc: "Match brand colors with visible swatches and saved presets.",
  },
  {
    icon: Scissors,
    title: "Background Removal",
    desc: "Quickly isolate visuals for ads, layouts, and creative comps.",
  },
];

const useCases = [
  "Social posts",
  "Ad creatives",
  "Posters",
  "Brand visuals",
  "Moodboards",
];

const exampleResults = [
  {
    title: "Luxury skincare campaign",
    style: "Soft Luxury",
    ratio: "4:5",
    bg: "linear-gradient(180deg,#0d173f 0%,#182d82 35%,#698dff 68%,#d5e0ff 100%)",
  },
  {
    title: "Perfume editorial poster",
    style: "Editorial",
    ratio: "1:1",
    bg: "linear-gradient(180deg,#08112f 0%,#17306f 38%,#5c81ff 72%,#d7e4ff 100%)",
  },
  {
    title: "Dreamy concept visual",
    style: "Dreamy Art",
    ratio: "16:9",
    bg: "linear-gradient(180deg,#101646 0%,#28379a 40%,#8d88ff 70%,#d9ddff 100%)",
  },
  {
    title: "Bold product ad",
    style: "Bold Ad",
    ratio: "9:16",
    bg: "linear-gradient(180deg,#071133 0%,#17358a 40%,#4d8bff 72%,#d3e4ff 100%)",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow && <div className="section-heading__eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="bg-layer bg-layer--base" />
      <div className="bg-layer bg-layer--grid" />
      <div className="bg-orb bg-orb--left" />
      <div className="bg-orb bg-orb--right" />
      <div className="bg-orb bg-orb--top" />

      <div className="homepage__container">
        <header className="topbar">
          <div className="brand">
            <div className="brand__icon">
              <Layers3 size={18} />
            </div>
            <span>Lustre Studio</span>
          </div>

          <nav className="topbar__nav">
            <a href="#features">Features</a>
            <a href="#styles">Style Modes</a>
            <a href="#examples">Examples</a>
            <a href="#pricing">Pricing</a>
            <a href="#signin">Sign In</a>
          </nav>

          <button className="btn btn--primary">Start Creating</button>
        </header>

        <section className="hero">
          <div className="hero__left">
            <div className="hero__badge">
              <Sparkles size={14} />
              <span>Consistent AI visual generation</span>
            </div>

            <h1>
              Create consistent AI visuals with inspiration, color, and style
              control.
            </h1>

            <p>
              Upload a mood reference, add your prompt and brand colors, then
              generate polished images in curated styles built for editors,
              designers, and marketers.
            </p>

            <div className="hero__actions">
              <button className="btn btn--primary btn--large">
                Generate Image
              </button>
              <button className="btn btn--secondary btn--large">
                View Examples
              </button>
            </div>

            <div className="hero__bullets">
              <div>
                <Check size={14} /> Inspiration-guided visuals
              </div>
              <div>
                <Check size={14} /> Brand palette control
              </div>
              <div>
                <Check size={14} /> Curated style modes
              </div>
            </div>
          </div>

          <div className="hero__right">
            <div className="mockup">
              <div className="mockup__main">
                <div className="mockup__screen">
                  <div className="mockup__screen-top" />
                  <div className="mockup__screen-grid">
                    <div className="mockup-card prompt-card">
                      <div className="mockup-card__label">Prompt</div>
                      <div className="mockup-card__text">
                        Luxury skincare product photo on marble table, soft
                        shadows, premium mood
                      </div>
                    </div>

                    <div className="mockup-card image-card">
                      <div className="mockup-card__label">Inspiration</div>
                      <div className="image-card__preview" />
                    </div>

                    <div className="mockup-card palette-card">
                      <div className="mockup-card__label">Palette</div>
                      <div className="palette-row">
                        <span style={{ background: "#DCE6FF" }} />
                        <span style={{ background: "#6E8DFF" }} />
                        <span style={{ background: "#18328E" }} />
                        <span style={{ background: "#050B22" }} />
                      </div>
                    </div>

                    <div className="mockup-card style-card-mini">
                      <div className="mockup-card__label">Style</div>
                      <div className="style-pill">Soft Luxury</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card--prompt">
                Prompt-led workflow
              </div>
              <div className="floating-card floating-card--palette">
                Brand palette ready
              </div>
              <div className="floating-card floating-card--style">
                Curated style modes
              </div>
            </div>
          </div>
        </section>

        <section className="section how-it-works" id="features">
          <SectionHeading
            eyebrow="How it works"
            title="A simple workflow for polished visual generation"
            text="Keep the experience fast and focused: upload inspiration, describe what you want, choose colors and style, then generate polished visuals."
          />

          <div className="steps-grid">
            {[
              [
                "Upload inspiration",
                "Use a mood or lighting reference to guide the visual tone.",
              ],
              [
                "Write prompt",
                "Describe what you want to create in plain language.",
              ],
              [
                "Choose colors + style",
                "Match brand colors and pick a curated visual mode.",
              ],
              [
                "Generate visuals",
                "Create clean image options ready for creative work.",
              ],
            ].map(([title, desc], index) => (
              <div className="step-card" key={title}>
                <div className="step-card__number">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="styles">
          <SectionHeading
            eyebrow="Style modes"
            title="Curated styles designed for consistent output"
            text="Give users visual style choices instead of technical model controls."
          />

          <div className="style-modes-grid">
            {styleModes.map((style) => (
              <div className="style-mode-card" key={style.name}>
                <div className={`style-mode-card__preview ${style.cls}`} />
                <h3>{style.name}</h3>
                <p>{style.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Feature highlights"
            title="Built for fast, usable creative workflows"
          />

          <div className="features-grid">
            {features.map(({ icon: Icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="examples">
          <SectionHeading
            eyebrow="Example results"
            title="See the kind of visuals your workflow can produce"
            text="Use polished examples to help users understand quality and creative range."
          />

          <div className="examples-grid">
            {exampleResults.map((item, index) => (
              <div className="example-card" key={item.title}>
                <div
                  className="example-card__image"
                  style={{ background: item.bg }}
                >
                  <div className="example-card__badge">Output {index + 1}</div>
                  <div className="example-card__glass" />
                  <div className="example-card__shadow" />
                </div>
                <div className="example-card__meta">
                  <h3>{item.title}</h3>
                  <div className="example-card__tags">
                    <span>{item.style}</span>
                    <span>{item.ratio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Use cases"
            title="Designed for everyday creative work"
          />

          <div className="use-cases-grid">
            {useCases.map((item) => (
              <div className="use-case-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <div className="cta-banner__eyebrow">Start free</div>
            <h2>
              Generate polished visuals from inspiration, prompts, and brand
              colors.
            </h2>
            <p>Built for creatives who want consistency, not random outputs.</p>
          </div>

          <button className="btn btn--primary btn--large">
            Start Free
            <ArrowRight size={16} />
          </button>
        </section>

        <footer className="footer">
          <div className="footer__brand">
            <div className="brand">
              <div className="brand__icon">
                <Layers3 size={18} />
              </div>
              <span>Lustre Studio</span>
            </div>
            <p>
              AI image generation with style consistency and color control for
              creative work.
            </p>
          </div>

          <div className="footer__links">
            <div>
              <h4>Product</h4>
              <a href="/">Features</a>
              <a href="/">Style Modes</a>
              <a href="/">Examples</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="/">Pricing</a>
              <a href="/">Contact</a>
              <a href="/">Sign In</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
