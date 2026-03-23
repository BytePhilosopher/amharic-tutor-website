"use client"
import { useId } from "react"

// ──────────────────────────────────────────────────────────────────────────────
// TilfBorder – Ethiopian embroidery (ጥልፍ) cross-in-diamond border strip
// Inspired by the ornamental borders on habesha kemis traditional dresses
// ──────────────────────────────────────────────────────────────────────────────
interface TilfBorderProps {
  color?: string
  opacity?: number
  height?: number
  className?: string
}

export function TilfBorder({
  color = "#B08D3A",
  opacity = 1,
  height = 48,
  className = "",
}: TilfBorderProps) {
  const id = useId()
  const pid = `tilf-b-${id.replace(/:/g, "")}`

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height, opacity }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 48"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
        style={{ minWidth: "800px" }}
      >
        <defs>
          <pattern id={pid} x="0" y="0" width="80" height="48" patternUnits="userSpaceOnUse">
            {/* Horizontal frame lines */}
            <line x1="0" y1="2" x2="80" y2="2" stroke={color} strokeWidth="0.8" opacity="0.5" />
            <line x1="0" y1="46" x2="80" y2="46" stroke={color} strokeWidth="0.8" opacity="0.5" />
            {/* Outer diamond */}
            <polygon points="40,4 76,24 40,44 4,24" fill="none" stroke={color} strokeWidth="1.2" opacity="0.35" />
            {/* Inner diamond */}
            <polygon points="40,11 64,24 40,37 16,24" fill="none" stroke={color} strokeWidth="0.8" opacity="0.25" />
            {/* Ethiopian cross – vertical bar */}
            <rect x="38" y="14" width="4" height="20" rx="0.5" fill={color} opacity="0.38" />
            {/* Ethiopian cross – horizontal bar */}
            <rect x="20" y="22" width="40" height="4" rx="0.5" fill={color} opacity="0.38" />
            {/* Cross end caps (T-shaped finials) */}
            <rect x="35" y="12" width="10" height="2.5" rx="0.5" fill={color} opacity="0.3" />
            <rect x="35" y="33.5" width="10" height="2.5" rx="0.5" fill={color} opacity="0.3" />
            <rect x="17" y="20" width="3" height="8" rx="0.5" fill={color} opacity="0.3" />
            <rect x="60" y="20" width="3" height="8" rx="0.5" fill={color} opacity="0.3" />
            {/* Diamond accents at cardinal points */}
            <polygon points="40,4 43.5,8.5 40,13 36.5,8.5" fill={color} opacity="0.25" />
            <polygon points="40,35 43.5,39.5 40,44 36.5,39.5" fill={color} opacity="0.25" />
            <polygon points="4,24 8.5,27.5 4,31 0,27.5" fill={color} opacity="0.2" />
            <polygon points="76,24 80,27.5 76,31 72,27.5" fill={color} opacity="0.2" />
            {/* Tiny corner diamonds between units */}
            <circle cx="0" cy="2" r="1.5" fill={color} opacity="0.25" />
            <circle cx="80" cy="2" r="1.5" fill={color} opacity="0.25" />
            <circle cx="0" cy="46" r="1.5" fill={color} opacity="0.25" />
            <circle cx="80" cy="46" r="1.5" fill={color} opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// TilfOverlay – Subtle Ethiopian cross grid overlay for sections
// Creates a barely visible embroidery texture over hero/dark sections
// ──────────────────────────────────────────────────────────────────────────────
interface TilfOverlayProps {
  color?: string
  opacity?: number
  className?: string
}

export function TilfOverlay({
  color = "#B08D3A",
  opacity = 0.04,
  className = "",
}: TilfOverlayProps) {
  const id = useId()
  const pid = `tilf-o-${id.replace(/:/g, "")}`

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <defs>
          <pattern id={pid} x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            {/* Ethiopian cross */}
            <rect x="30" y="12" width="4" height="40" fill={color} />
            <rect x="12" y="30" width="40" height="4" fill={color} />
            {/* Cross T-caps */}
            <rect x="27" y="10" width="10" height="3" fill={color} />
            <rect x="27" y="51" width="10" height="3" fill={color} />
            <rect x="10" y="27" width="3" height="10" fill={color} />
            <rect x="51" y="27" width="3" height="10" fill={color} />
            {/* Diamond frame */}
            <polygon points="32,2 62,32 32,62 2,32" fill="none" stroke={color} strokeWidth="1" />
            {/* Inner diamond */}
            <polygon points="32,10 54,32 32,54 10,32" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// TilfDivider – A lighter, thinner version for inline section separation
// ──────────────────────────────────────────────────────────────────────────────
interface TilfDividerProps {
  color?: string
  className?: string
}

export function TilfDivider({
  color = "#B08D3A",
  className = "",
}: TilfDividerProps) {
  const id = useId()
  const pid = `tilf-d-${id.replace(/:/g, "")}`

  return (
    <div className={`w-full flex items-center justify-center gap-4 py-2 ${className}`}>
      <div className="flex-1 h-px" style={{ backgroundColor: color, opacity: 0.15 }} />
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" style={{ opacity: 0.3 }}>
        <polygon points="14,1 27,14 14,27 1,14" fill="none" stroke={color} strokeWidth="1.2" />
        <rect x="12.5" y="6" width="3" height="16" fill={color} />
        <rect x="6" y="12.5" width="16" height="3" fill={color} />
        <rect x="11" y="4.5" width="6" height="2" rx="0.5" fill={color} />
        <rect x="11" y="21.5" width="6" height="2" rx="0.5" fill={color} />
        <rect x="4.5" y="11" width="2" height="6" rx="0.5" fill={color} />
        <rect x="21.5" y="11" width="2" height="6" rx="0.5" fill={color} />
      </svg>
      <div className="flex-1 h-px" style={{ backgroundColor: color, opacity: 0.15 }} />
    </div>
  )
}
