export function MLMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#F97316" fillOpacity="0.15" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#F97316"
        fontSize="10"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        DL
      </text>
    </svg>
  );
}
