"use client";

import { useState } from "react";
import Link from "next/link";

interface MaterialWithProvenance {
  name: string;
  mlMaterialId: string;
  zone: string;
  category: string;
  suggestedGrade: string;
  dimensions: string;
  species: string;
  contaminationStatus: string;
  provenanceEvents: Array<{
    eventType: string;
    timestamp: string;
    notes: string;
  }>;
}

interface ConstructionData {
  materials: string[];
  tools: string[];
  sequence: string[];
  laborEstimate: string;
  difficultyScore: number;
}

interface QuoteData {
  deconEstimateLow: number;
  deconEstimateHigh: number;
  constructionEstimateLow: number;
  constructionEstimateHigh: number;
  currency: string;
  notes: string;
}

interface AnalysisResult {
  materials: string[];
  separationNotes: string;
  recoveryScore: number;
  recoveryEstimate?: string;
  sequence: string[];
  materialsWithProvenance?: MaterialWithProvenance[];
  construction?: ConstructionData;
  quote?: QuoteData;
  tier?: string;
}

type ResultTab = "decon" | "construction" | "quote";

export function DeconLab() {
  const [buildingType, setBuildingType] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [description, setDescription] = useState("");
  const [tier, setTier] = useState("scout");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<ResultTab>("decon");

  async function handleAnalyze() {
    if (!buildingType || !yearBuilt) return;
    setLoading(true);
    setActiveTab("decon");
    try {
      const res = await fetch("/api/analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingType,
          yearBuilt: parseInt(yearBuilt),
          description,
          tier,
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
    <div className="min-h-screen bg-dl-black flex flex-col">
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
            <span className="hidden sm:block text-dl-muted/20 ml-1">|</span>
            <div className="hidden sm:flex items-center gap-1.5 ml-1">
              <a href="https://mlsystemsri.com" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#22C55E]/50 hover:text-[#22C55E] border border-[#22C55E]/15 hover:border-[#22C55E]/30 rounded px-1.5 py-0.5 transition-colors">.com</a>
              <a href="https://mlsystemsri.info" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#94A3B8]/50 hover:text-[#94A3B8] border border-[#94A3B8]/15 hover:border-[#94A3B8]/30 rounded px-1.5 py-0.5 transition-colors">.info</a>
              <a href="https://mlsystemsri.store" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#14B8A6]/50 hover:text-[#14B8A6] border border-[#14B8A6]/15 hover:border-[#14B8A6]/30 rounded px-1.5 py-0.5 transition-colors">.store</a>
              <a href="https://mlsystemsri.net" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#F59E0B]/50 hover:text-[#F59E0B] border border-[#F59E0B]/15 hover:border-[#F59E0B]/30 rounded px-1.5 py-0.5 transition-colors">.net</a>
              <a href="https://mlsystemsri.xyz" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#8B5CF6]/50 hover:text-[#8B5CF6] border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/30 rounded px-1.5 py-0.5 transition-colors">.xyz</a>
              <a href="https://pit.mlsystemsri.com" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#EF4444]/50 hover:text-[#EF4444] border border-[#EF4444]/15 hover:border-[#EF4444]/30 rounded px-1.5 py-0.5 transition-colors">Pit</a>
              <a href="https://collective.mlsystemsri.com" target="_blank" rel="noopener" className="text-[10px] font-bold text-[#D4AF37]/50 hover:text-[#D4AF37] border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 rounded px-1.5 py-0.5 transition-colors">BC</a>
            </div>
          </div>
          <nav className="flex items-center gap-1">
            {[
              { href: "/", label: "Lab" },
              { href: "/ontology", label: "Ontology" },
              { href: "/research", label: "Research" },
              { href: "/billing", label: "Billing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-dl-muted hover:text-dl-orange hover:bg-dl-orange/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-10 flex-1">
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

              {/* Tier selector */}
              <div>
                <label className="mb-1 block text-sm text-dl-muted">
                  Analysis Tier
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "scout", label: "Scout", price: "Free", desc: "Decon + Build + Quote" },
                    { value: "analysis", label: "Analysis", price: "$25", desc: "Per assembly + ML IDs" },
                    { value: "full", label: "Full Structure", price: "$200", desc: "All assemblies mapped" },
                    { value: "dem", label: "Full + DEM", price: "$350", desc: "Regulatory export" },
                  ].map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setTier(t.value)}
                      className={`rounded-lg border px-3 py-2 text-left transition-all ${
                        tier === t.value
                          ? "border-dl-orange bg-dl-orange/10 text-dl-text"
                          : "border-dl-border bg-dl-elevated text-dl-muted hover:border-dl-orange/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{t.label}</span>
                        <span className={`text-[10px] font-bold ${t.value === "scout" ? "text-green-400" : "text-dl-orange"}`}>
                          {t.price}
                        </span>
                      </div>
                      <p className="text-[10px] text-dl-muted mt-0.5">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading || !buildingType || !yearBuilt}
                className="w-full rounded-lg bg-dl-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-dl-orange-dark disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing Assembly..." : tier === "scout" ? "Analyze Free — Decon + Build" : "Analyze Deconstruction"}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl border border-dl-border bg-dl-surface p-6">
            {!result && !loading && (
              <div className="flex h-64 items-center justify-center text-dl-muted">
                <p className="text-center text-sm">
                  Submit a building profile to generate<br />
                  deconstruction + construction analysis with AI.
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
                {/* Tab Navigation */}
                <div className="flex gap-1 rounded-lg bg-dl-black p-1">
                  {(
                    [
                      { key: "decon" as ResultTab, label: "Deconstruction", color: "text-dl-orange" },
                      { key: "construction" as ResultTab, label: "Construction", color: "text-[#60A5FA]" },
                      { key: "quote" as ResultTab, label: "Free Quote", color: "text-[#22C55E]" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex-1 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                        activeTab === tab.key
                          ? `bg-dl-surface ${tab.color}`
                          : "text-dl-muted hover:text-dl-text"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Recovery Score (always visible) */}
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

                {/* ── Deconstruction Tab ── */}
                {activeTab === "decon" && (
                  <div className="space-y-4">
                    {/* Materials */}
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-dl-muted">
                        Recovered Materials
                        {result.materialsWithProvenance && (
                          <span className="ml-2 text-xs text-dl-orange font-normal">
                            {result.materialsWithProvenance.length} items tracked
                          </span>
                        )}
                      </h4>
                      {result.materialsWithProvenance ? (
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                          {result.materialsWithProvenance.map((m, i) => (
                            <div
                              key={i}
                              className="rounded-lg bg-dl-black/50 border border-dl-border px-3 py-2 flex items-start justify-between gap-2"
                            >
                              <div className="min-w-0">
                                <p className="text-xs text-dl-text truncate">{m.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <code className="text-[10px] font-mono text-dl-orange bg-dl-orange/10 px-1.5 py-0.5 rounded">
                                    {m.mlMaterialId}
                                  </code>
                                  {m.species && (
                                    <span className="text-[10px] text-dl-muted">{m.species}</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  m.suggestedGrade === "A" ? "bg-green-500/15 text-green-400" :
                                  m.suggestedGrade === "B" ? "bg-blue-500/15 text-blue-400" :
                                  m.suggestedGrade === "C" ? "bg-yellow-500/15 text-yellow-400" :
                                  m.suggestedGrade === "D" ? "bg-red-500/15 text-red-400" :
                                  "bg-gray-500/15 text-gray-400"
                                }`}>
                                  {m.suggestedGrade}
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                                  m.contaminationStatus === "clean" ? "bg-green-500/10 text-green-400" :
                                  m.contaminationStatus === "untested" ? "bg-gray-500/10 text-gray-400" :
                                  "bg-red-500/10 text-red-400"
                                }`}>
                                  {m.contaminationStatus}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {result.materials.map((m, i) => (
                            <span key={i} className="rounded-full bg-dl-orange/10 px-3 py-1 text-xs text-dl-orange">
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Separation Notes */}
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-dl-muted">Separation Analysis</h4>
                      <p className="text-sm text-dl-text/80">{result.separationNotes}</p>
                    </div>

                    {/* Decon Sequence */}
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-dl-muted">Deconstruction Sequence</h4>
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

                {/* ── Construction Tab ── */}
                {activeTab === "construction" && (
                  <div className="space-y-4">
                    {result.construction ? (
                      <>
                        {/* Difficulty Score */}
                        <div className="rounded-lg bg-dl-elevated p-4">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm text-dl-muted">Build Difficulty</span>
                            <span className="text-2xl font-bold text-[#60A5FA]">{result.construction.difficultyScore}</span>
                          </div>
                          <div className="h-2 rounded-full bg-dl-black">
                            <div className="h-2 rounded-full bg-[#60A5FA] transition-all" style={{ width: `${result.construction.difficultyScore}%` }} />
                          </div>
                        </div>

                        {/* Materials to Build */}
                        <div>
                          <h4 className="mb-2 text-sm font-medium text-dl-muted">Materials Required</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.construction.materials.map((m, i) => (
                              <span key={i} className="rounded-full bg-[#60A5FA]/10 px-3 py-1 text-xs text-[#60A5FA]">{m}</span>
                            ))}
                          </div>
                        </div>

                        {/* Tools */}
                        <div>
                          <h4 className="mb-2 text-sm font-medium text-dl-muted">Tools Required</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.construction.tools.map((t, i) => (
                              <span key={i} className="rounded-full bg-dl-elevated border border-dl-border px-3 py-1 text-xs text-dl-text">{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Build Sequence */}
                        <div>
                          <h4 className="mb-2 text-sm font-medium text-dl-muted">Construction Sequence</h4>
                          <ol className="space-y-1">
                            {result.construction.sequence.map((step, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#60A5FA]/20 text-xs font-bold text-[#60A5FA]">
                                  {i + 1}
                                </span>
                                <span className="text-dl-text/80">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Labor */}
                        <div className="rounded-lg bg-dl-elevated p-3">
                          <h4 className="text-xs font-medium text-dl-muted mb-1">Labor Estimate</h4>
                          <p className="text-sm text-dl-text">{result.construction.laborEstimate}</p>
                        </div>
                      </>
                    ) : (
                      <div className="flex h-32 items-center justify-center text-dl-muted">
                        <p className="text-center text-sm">Construction data not available for this analysis.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* ── Quote Tab ── */}
                {activeTab === "quote" && (
                  <div className="space-y-4">
                    {result.quote ? (
                      <>
                        <div className="grid grid-cols-2 gap-3">
                          {/* Decon Quote */}
                          <div className="rounded-lg border border-dl-orange/20 bg-dl-elevated p-4">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-dl-orange mb-2">Deconstruction</p>
                            <p className="text-lg font-bold text-dl-text">
                              ${result.quote.deconEstimateLow.toLocaleString()} – ${result.quote.deconEstimateHigh.toLocaleString()}
                            </p>
                            <p className="text-[10px] text-dl-muted mt-1">ML Systems performs the deconstruction</p>
                          </div>

                          {/* Construction Quote */}
                          <div className="rounded-lg border border-[#60A5FA]/20 bg-dl-elevated p-4">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#60A5FA] mb-2">Construction</p>
                            <p className="text-lg font-bold text-dl-text">
                              ${result.quote.constructionEstimateLow.toLocaleString()} – ${result.quote.constructionEstimateHigh.toLocaleString()}
                            </p>
                            <p className="text-[10px] text-dl-muted mt-1">ML Systems builds the assembly</p>
                          </div>
                        </div>

                        {/* Quote Notes */}
                        <div className="rounded-lg bg-dl-elevated p-3">
                          <h4 className="text-xs font-medium text-dl-muted mb-1">Assumptions</h4>
                          <p className="text-sm text-dl-text/80">{result.quote.notes}</p>
                        </div>

                        {/* CTA */}
                        <a
                          href="https://mlsystemsri.com/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full rounded-lg bg-[#22C55E] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#22C55E]/90"
                        >
                          Get a Detailed Quote from ML Systems
                        </a>
                        <p className="text-center text-[10px] text-dl-muted">
                          Free estimate — no obligation. We&apos;ll review your building profile and provide a detailed scope.
                        </p>

                        {/* Upgrade hint for scout users */}
                        {result.tier === "scout" && (
                          <div className="rounded-lg border border-dl-orange/15 bg-dl-orange/5 p-3 mt-2">
                            <p className="text-[11px] text-dl-muted">
                              Want ML Material IDs, detailed separation plans, and DEM export?{" "}
                              <button onClick={() => setTier("analysis")} className="text-dl-orange font-semibold hover:underline">
                                Upgrade to Analysis ($25)
                              </button>
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex h-32 items-center justify-center text-dl-muted">
                        <p className="text-center text-sm">Quote data not available for this analysis.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Technology & Licensing */}
        <div className="mt-16 rounded-xl border border-dl-orange/15 bg-dl-surface p-8">
          <div className="flex items-center gap-2 mb-6">
            <p className="text-dl-orange text-xs font-bold tracking-[0.15em] uppercase">Technology</p>
            <span className="text-[9px] font-bold uppercase tracking-widest text-dl-orange border border-dl-orange/30 rounded-full px-1.5 py-0.5">Coming Soon</span>
          </div>
          <h2 className="text-xl font-bold text-dl-text mb-3">
            From R&amp;D to Revenue
          </h2>
          <p className="text-dl-muted text-sm leading-relaxed mb-8 max-w-3xl">
            Decon Lab isn&apos;t just a tool — it&apos;s the research layer behind two licensable technology platforms.
            Every analysis trains the system. Every recovery sequence refines the data. The intelligence compounds.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Humanoid Ontology */}
            <div className="rounded-lg border border-dl-border bg-dl-elevated p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 text-[#22C55E] text-sm">&#x1f9ec;</span>
                <div>
                  <p className="text-sm font-semibold text-dl-text">Humanoid Ontology</p>
                  <p className="text-[10px] text-dl-muted uppercase tracking-wider">Construction Sequence Data</p>
                </div>
              </div>
              <p className="text-xs text-dl-muted leading-relaxed mb-3">
                81 task codes. 1,480 executions. 32 atomic robot actions. The only construction robotics dataset
                built from real field work — not simulated. Licensed via the Data API to robotics companies
                building humanoid and autonomous construction systems.
              </p>
              <a href="https://api.mlsystemsri.com" target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#22C55E] hover:text-[#22C55E]/80 transition-colors">
                Data API &rarr;
              </a>
            </div>

            {/* Automated Concrete Breaker */}
            <div className="rounded-lg border border-dl-border bg-dl-elevated p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dl-orange/15 text-dl-orange text-sm">&#x2692;</span>
                <div>
                  <p className="text-sm font-semibold text-dl-text">Track Breaker</p>
                  <p className="text-[10px] text-dl-muted uppercase tracking-wider">Automated Concrete Separation</p>
                </div>
              </div>
              <p className="text-xs text-dl-muted leading-relaxed mb-3">
                A tracked robotic platform for autonomous concrete breaking and material separation.
                Eliminates manual demolition labor for foundation recovery. Designed for the 80–90%
                recovery target where conventional methods fail at the foundation layer.
              </p>
              <span className="text-[11px] font-semibold text-dl-orange/60">
                In Development
              </span>
            </div>
          </div>
        </div>
      </main>
      {/* Ecosystem Footer */}
      <footer className="border-t border-dl-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dl-muted/40 text-xs">Decon Lab — a product of ML Systems LLC</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="https://mlsystemsri.com" target="_blank" rel="noopener noreferrer" className="text-dl-muted/50 hover:text-[#22C55E] transition-colors">ML Systems ↗</a>
            <a href="https://design.mlsystemsri.com" target="_blank" rel="noopener noreferrer" className="text-dl-muted/50 hover:text-[#60A5FA] transition-colors">Design Studio ↗</a>
            <a href="https://mlsystemsri.store" target="_blank" rel="noopener noreferrer" className="text-dl-muted/50 hover:text-[#14B8A6] transition-colors">Builder&apos;s Open House ↗</a>
            <a href="https://mlsystemsri.com/the-process" target="_blank" rel="noopener noreferrer" className="text-dl-orange/60 hover:text-dl-orange font-semibold transition-colors">The Process →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
