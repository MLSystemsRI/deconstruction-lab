"use client";

export default function OntologyPage() {
  return (
    <div className="min-h-screen bg-dl-black">
      <iframe
        src="/ontology/viewer.html"
        className="w-full h-screen border-none"
        title="Deconstruction Ontology Viewer"
      />
    </div>
  );
}
