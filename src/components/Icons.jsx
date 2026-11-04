// Simple line icons drawn with SVG (no image files needed)
const paths = {
  cup: (
    <>
      <path d="M5 10h12v4a6 6 0 0 1-12 0z" />
      <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M4 21h15" />
    </>
  ),
  leaf: (
    <>
      <path d="M6 20c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M6 20c3-4 6-7 10-10" />
    </>
  ),
  pastry: (
    <>
      <path d="M3 15c2-6 6-9 9-9s7 3 9 9c-3 2-15 2-18 0z" />
      <path d="M8 9l1.5 6M12 6v9M16 9l-1.5 6" />
    </>
  ),
  cake: (
    <>
      <path d="M4 20h16v-7H4z" />
      <path d="M4 15c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 4 0" />
      <path d="M12 13V9M12 6.5a1 1 0 0 1 0-2" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}
