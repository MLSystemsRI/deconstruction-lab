import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deconstruction Lab — Material Recovery & Separation Science by ML Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1A0F00 50%, #0A0A0A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
          }}
        />

        {/* ML mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "rgba(249,115,22,0.15)",
              border: "1px solid rgba(249,115,22,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 800,
              color: "#F97316",
            }}
          >
            ML
          </div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            Systems
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "12px",
            maxWidth: "900px",
          }}
        >
          Deconstruction Lab
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#F97316",
            fontWeight: 600,
            marginBottom: "32px",
            letterSpacing: "0.05em",
          }}
        >
          Material Recovery &amp; Separation Science
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px" }}>
          {["Material Analysis", "Recovery Scoring", "Adhesive Research", "Separation Science"].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  color: "rgba(249,115,22,0.8)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "48px",
            background: "rgba(249,115,22,0.08)",
            borderTop: "1px solid rgba(249,115,22,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 500,
          }}
        >
          decon.mlsystemsri.com
        </div>
      </div>
    ),
    { ...size }
  );
}
