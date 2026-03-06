"use client";

import { isDemoMode } from "@/lib/auth";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-dl-black p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-dl-orange">
          R&D Analytics
        </h1>
        <p className="mb-8 text-dl-muted">
          Material separation research, adhesive analysis, and recovery data.
        </p>

        <div className="rounded-xl border border-dl-border bg-dl-surface p-8 text-center">
          <p className="text-dl-muted">
            Research dashboard coming soon — will aggregate deconstruction
            session data, material recovery rates, and separation technique
            effectiveness across building eras and assembly types.
          </p>
        </div>
      </div>
    </div>
  );
}
