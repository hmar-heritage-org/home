export function LogoIcon({ className = "w-6 h-6 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top H rotated 90 degrees */}
      <path d="M 5 3.5 H 19 M 5 9.5 H 19 M 12 3.5 V 9.5" />
      {/* Bottom H rotated 90 degrees */}
      <path d="M 5 14.5 H 19 M 5 20.5 H 19 M 12 14.5 V 20.5" />
    </svg>
  );
}

export default LogoIcon;
