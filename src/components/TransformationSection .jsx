import React from "react";

const TransformationSection = () => {
  const accent = "#C5A100";
  const accentLight = "#FFE085";
  const white = "#ffffff";
  const lightText = "#bdbdbd";
  const border = "rgba(255,255,255,0.18)";
  const cardBg = "#0b0b0b";

  const transformations = [
    {
      id: 1,
      before: "/images/success/before-1.png",
      after: "/images/success/after-1.png",
      beforeLabel: "BEFORE",
      afterLabel: "AFTER",
    },
    {
      id: 2,
      before: "/images/success/before-2.png",
      after: "/images/success/after-2.png",
      beforeLabel: "BEFORE",
      afterLabel: "AFTER",
    },
    {
      id: 3,
      before: "/images/success/before-3.jpg",
      after: "/images/success/after-3.jpg",
      beforeLabel: "BEFORE",
      afterLabel: "AFTER",
    },
  ];

  // Repeat cards so one group is always wider than the screen (no gap at the loop point)
  const repeatedItems = [
    ...transformations,
    ...transformations,
    ...transformations,
  ];

  const labelStyle = {
    position: "absolute",
    top: "12px",
    left: "12px",
    background: "rgba(0,0,0,0.72)",
    color: accentLight,
    fontWeight: 900,
    fontSize: "1rem",
    padding: "8px 12px",
    borderRadius: "12px",
    letterSpacing: "0.03em",
    fontFamily: "Montserrat, Arial, sans-serif",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const renderTransformationCard = (item, key) => (
    <div
      key={key}
      className="transformation-card"
      style={{
        flex: "0 0 320px",
        width: "320px",
        background: cardBg,
        borderRadius: "26px",
        border: `1px solid ${border}`,
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "390px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img src={item.before} alt={item.beforeLabel} style={imgStyle} />
          <span style={labelStyle}>{item.beforeLabel}</span>
        </div>

        <div style={{ position: "relative" }}>
          <img src={item.after} alt={item.afterLabel} style={imgStyle} />
          <span style={labelStyle}>{item.afterLabel}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="success-stories"
      className="scroll-mt-[82px]"
      style={{
        backgroundColor: "#050505",
        padding: "90px 20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: accent,
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontWeight: 800,
            marginBottom: "18px",
            lineHeight: 1.1,
            fontFamily: "Montserrat, Arial, sans-serif",
            textShadow: "0 0 18px rgba(197,161,0,0.18)",
          }}
        >
          Real People. Real Results.
        </h2>

        <p
          style={{
            color: lightText,
            fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
            marginBottom: "50px",
            lineHeight: 1.6,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Over <span style={{ color: accent, fontWeight: 800 }}>6,800+</span>{" "}
          working professionals have completed{" "}
          <span style={{ color: white, fontWeight: 700 }}>CoreX</span> across
          India.
        </p>
      </div>

      <div className="transformation-viewport w-full overflow-hidden">
        <div className="transformation-slider">
          <div className="transformation-group">
            {repeatedItems.map((item, i) =>
              renderTransformationCard(item, `first-${i}`)
            )}
          </div>
          <div className="transformation-group" aria-hidden="true">
            {repeatedItems.map((item, i) =>
              renderTransformationCard(item, `second-${i}`)
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          .transformation-slider {
            display: flex;
            width: max-content;
            align-items: stretch;
            animation: slideLeft 96s linear infinite;
            will-change: transform;
          }

          .transformation-group {
            display: flex;
            flex-shrink: 0;
            gap: 28px;
            padding-right: 28px; /* keeps spacing identical at the loop seam */
          }

          .transformation-slider:hover {
            animation-play-state: paused;
          }

          @keyframes slideLeft {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(-50%, 0, 0); }
          }

          @media (max-width: 768px) {
            .transformation-group > div {
              flex: 0 0 280px !important;
              width: 280px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .transformation-slider { animation: none !important; }
          }
        `}
      </style>
    </section>
  );
};

export default TransformationSection;