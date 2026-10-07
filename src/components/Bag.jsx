export default function Bag({ packed }) {
  return (
    <div className="bagwrap">
      <div className="contents">
        {packed.map((it) => (
          <span key={it.id} className="pop" role="img" aria-label={it.name}>{it.emoji}</span>
        ))}
      </div>
      <svg className="bagsvg" viewBox="0 0 240 230" aria-hidden="true">
        <path d="M85 70 Q85 20 120 20 Q155 20 155 70" fill="none" stroke="#212b6b" strokeWidth="9" strokeLinecap="round" />
        <path d="M30 110 Q30 100 42 100 L198 100 Q210 100 210 110 L220 205 Q222 222 205 222 L35 222 Q18 222 20 205 Z" fill="#2d3a8c" />
        <rect x="30" y="100" width="180" height="18" rx="6" fill="#212b6b" />
        <rect x="70" y="150" width="100" height="52" rx="12" fill="#3b49a8" />
        <line x1="70" y1="168" x2="170" y2="168" stroke="#212b6b" strokeWidth="3" />
        <rect x="112" y="160" width="16" height="18" rx="4" fill="#f08a24" />
      </svg>
    </div>
  )
}
