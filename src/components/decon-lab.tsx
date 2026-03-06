"use client";

import { useState } from "react";

interface AnalysisResult {
  materials: string[];
  separationNotes: string;
  recoveryScore: number;
  sequence: string[];
}

export function DeconLab() {
  const [buildingType, setBuildingType] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  async function handleAnalyze() {
    if (!buildingType || !yearBuilt) return;
    setLoading(true);
    try {
      const res = await fetch("/api/analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingType,
          yearBuilt: parseInt(yearBuilt),
          description,
        }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Analysis failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-dl-black">
      {/* Header */}
      <header className="border-b border-dl-border px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dl-orange/20">
              <svg
                className="h-6 w-6 text-dl-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dl-text">
                Deconstruction Lab
              </h1>
              <p className="text-xs text-dl-muted">
                Reverse Engineering Building Assemblies
              </p>
            </div>
          </div>
          <span className="rounded-full bg-dl-orange/10 px-3 py-1 text-xs font-medium text-dl-orange">
            Decon Lab
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Intro */}
        <div className="mb-10 rounded-xl border border-dl-orange/20 bg-dl-surface p-8">
          <h2 className="mb-3 text-2xl font-bold text-dl-orange">
            The Science of Taking Buildings Apart
          </h2>
          <p className="max-w-3xl text-dl-muted">
            Every home is a puzzle of layered materials — dried adhesives bonding
            subfloor to joists, polyurethane spray foam sealing cavities,
            composite fasteners threading through assemblies. Decon Lab uses AI to
            reverse engineer these assemblies and generate optimal deconstruction
            sequences for maximum material recovery.
          </p>
        </div>

        {/* Input Form */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-dl-border bg-dl-surface p-6">
            <h3 className="mb-4 text-lg font-semibold text-dl-text">
              Building Profile
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-dl-muted">
                  Building Type
                </label>
                <select
                  value={buildingType}
                  onChange={(e) => setBuildingType(e.target.value)}
                  className="w-full rounded-lg border border-dl-border bg-dl-elevated px-4 py-2.5 text-dl-text focus:border-dl-orange focus:outline-none"
                >
                  <option value="">Select type...</option>
                  <option value="single-family">Single-Family Home</option>
                  <option value="multi-family">Multi-Family / Duplex</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="ranch">Ranch</option>
                  <option value="colonial">Colonial</option>
                  <option value="cape-cod">Cape Cod</option>
                  <option value="commercial-small">Small Commercial</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm text-dl-muted">
                  Year Built
                </label>
                <input
                  type="number"
                  value={yearBuilt}
                  onChange={(e) => setYearBuilt(e.target.value)}
                  placeholder="e.g. 1985"
                  className="w-full rounded-lg border border-dl-border bg-dl-elevated px-4 py-2.5 text-dl-text placeholder:text-dl-muted/50 focus:border-dl-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-dl-muted">
                  Assembly Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Describe the building assembly, known materials, adhesives, fasteners, insulation types..."
                  className="w-full resize-none rounded-lg border border-dl-border bg-dl-elevated px-4 py-2.5 text-dl-text placeholder:text-dl-muted/50 focus:border-dl-orange focus:outline-none"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading || !buildingType || !yearBuilt}
                className="w-full rounded-lg bg-dl-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-dl-orange-dark disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing Assembly..." : "Analyze Deconstruction"}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl border border-dl-border bg-dl-surface p-6">
            <h3 className="mb-4 text-lg font-semibold text-dl-text">
              Analysis Results
            </h3>

            {!result && !loading && (
              <div className="flex h-64 items-center justify-center text-dl-muted">
                <p className="text-center text-sm">
                  Submit a building profile to generate a<br />
                  deconstruction analysis with AI.
                </p>
              </div>
            )}

            {loading && (
              <div className="flex h-64 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-dl-orange border-t-transparent" />
                  <p className="text-sm text-dl-muted">
                    Reverse engineering assembly...
                  </p>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                {/* Recovery Score */}
                <div className="rounded-lg bg-dl-elevated p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-dl-muted">
                      Material Recovery Score
                    </span>
                    <span className="text-2xl font-bold text-dl-orange">
                      {result.recoveryScore}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-dl-black">
                    <div
                      className="h-2 rounded-full bg-dl-orange transition-all"
                      style={{ width: `${result.recoveryScore}%` }}
                    />
                  </div>
                </div>

                {/* Detected Materials */}
                <div>
                  <h4 className="mb-2 text-sm font-medium text-dl-muted">
                    Detected Materials
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.materials.map((m, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-dl-orange/10 px-3 py-1 text-xs text-dl-orange"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Separation Notes */}
                <div>
                  <h4 className="mb-2 text-sm font-medium text-dl-muted">
                    Separation Analysis
                  </h4>
                  <p className="text-sm text-dl-text/80">
                    {result.separationNotes}
                  </p>
                </div>

                {/* Deconstruction Sequence */}
                <div>
                  <h4 className="mb-2 text-sm font-medium text-dl-muted">
                    Deconstruction Sequence
                  </h4>
                  <ol className="space-y-1">
                    {result.sequence.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dl-orange/20 text-xs font-bold text-dl-orange">
                          {i + 1}
                        </span>
                        <span className="text-dl-text/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
