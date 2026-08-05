/**
 * Illustrated rooftop used by the before/after comparison.
 *
 * Both variants render the identical building on the same viewBox, so the
 * wipe lines up exactly — only the roof deck changes. It is drawn, not
 * photographed, and reads as an illustration rather than a project photo.
 */

type Variant = "before" | "after";

/** One tilted panel face — narrower at the top so it recedes convincingly. */
function Panel({ x, y, w, h, inset }: { x: number; y: number; w: number; h: number; inset: number }) {
  const pts = `${x + inset},${y} ${x + w - inset},${y} ${x + w},${y + h} ${x},${y + h}`;
  return (
    <g>
      <polygon points={pts} fill="url(#panelFace)" stroke="#2E8B57" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* cell divisions, sheared to follow the panel's taper */}
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={x + inset + (w - inset * 2) * t}
          y1={y}
          x2={x + w * t}
          y2={y + h}
          stroke="#3FA96A"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
      ))}
      <line
        x1={x + inset / 2}
        y1={y + h / 2}
        x2={x + w - inset / 2}
        y2={y + h / 2}
        stroke="#3FA96A"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      {/* specular sheen across the glass */}
      <polygon points={pts} fill="url(#glassSheen)" opacity="0.5" />
    </g>
  );
}

/** Three rows, each nearer and so wider — panels butt up close, as a real array does. */
const ROWS = [
  { y: 592, h: 60, w: 244, inset: 15, startX: 262, gap: 7 },
  { y: 666, h: 68, w: 278, inset: 17, startX: 214, gap: 8 },
  { y: 752, h: 74, w: 314, inset: 19, startX: 158, gap: 9 },
];

export function RoofScene({ variant }: { variant: Variant }) {
  const after = variant === "after";

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="size-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7EEF1" />
          <stop offset="100%" stopColor="#FAF9F5" />
        </linearGradient>
        <linearGradient id="deck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DAD6C8" />
          <stop offset="100%" stopColor="#C6C2B3" />
        </linearGradient>
        <linearGradient id="panelFace" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#14532D" />
          <stop offset="100%" stopColor="#0B3320" />
        </linearGradient>
        <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sunGlow">
          <stop offset="0%" stopColor="#F5B301" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5B301" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="1600" height="900" fill="url(#sky)" />

      {/* Sun — brighter once the roof is working */}
      <circle cx="1330" cy="170" r={after ? 150 : 120} fill="url(#sunGlow)" opacity={after ? 1 : 0.6} />
      <circle cx="1330" cy="170" r="64" fill="#F5B301" opacity={after ? 1 : 0.75} />
      {after &&
        Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              x1={1330 + Math.cos(a) * 84}
              y1={170 + Math.sin(a) * 84}
              x2={1330 + Math.cos(a) * 108}
              y2={170 + Math.sin(a) * 108}
              stroke="#FFC730"
              strokeWidth="7"
              strokeLinecap="round"
            />
          );
        })}

      {/* Distant skyline */}
      <g fill="#DEDACE">
        <rect x="120" y="430" width="92" height="132" />
        <rect x="228" y="472" width="70" height="90" />
        <rect x="1180" y="398" width="112" height="164" />
        <rect x="1308" y="452" width="82" height="110" />
      </g>

      {/* Back parapet */}
      <rect x="190" y="530" width="1220" height="52" fill="#CFCBBD" />
      <rect x="190" y="530" width="1220" height="11" fill="#E0DCCF" />

      {/* Stairwell head-room box (back right) */}
      <rect x="1146" y="430" width="204" height="102" fill="#D5D1C3" />
      <rect x="1134" y="418" width="228" height="16" fill="#C2BEB0" />

      {/* Water tank (back left) */}
      <g>
        <rect x="286" y="502" width="14" height="30" fill="#AFAB9E" />
        <rect x="352" y="502" width="14" height="30" fill="#AFAB9E" />
        <rect x="266" y="440" width="120" height="66" rx="8" fill="#B7C5CC" />
        <ellipse cx="326" cy="440" rx="60" ry="15" fill="#CBD8DE" />
      </g>

      {/* Roof deck */}
      <polygon points="190,582 1410,582 1530,838 70,838" fill="url(#deck)" />
      <polygon points="70,838 1530,838 1530,900 70,900" fill="#B9B5A7" />

      {after ? (
        <>
          {/* Array — three receding rows, each on a mounting rail with its shadow */}
          {ROWS.map((row, ri) => (
            <g key={ri}>
              <ellipse
                cx={row.startX + (row.w * 4 + row.gap * 3) / 2}
                cy={row.y + row.h + 6}
                rx={(row.w * 4 + row.gap * 3) / 2}
                ry="7"
                fill="#8A8A82"
                opacity="0.22"
              />
              {Array.from({ length: 4 }).map((_, pi) => (
                <Panel
                  key={pi}
                  x={row.startX + pi * (row.w + row.gap)}
                  y={row.y}
                  w={row.w}
                  h={row.h}
                  inset={row.inset}
                />
              ))}
            </g>
          ))}

          {/* Inverter wall-mounted on the stairwell + gold energy run from the array */}
          <rect x="1172" y="446" width="58" height="80" rx="7" fill="#F4F2EA" stroke="#B2AEA0" strokeWidth="2" />
          <rect x="1183" y="459" width="36" height="24" rx="3" fill="#14532D" />
          <circle cx="1201" cy="504" r="5.5" fill="#3FA96A" />
          <path
            d="M1201 526 L1201 590 L1010 608"
            fill="none"
            stroke="#F5B301"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="16 8"
            style={{ animation: "dashFlow 1.1s linear infinite" }}
          />
        </>
      ) : (
        <>
          {/* Bare deck — weathered, cluttered, generating nothing */}
          <ellipse cx="420" cy="666" rx="120" ry="32" fill="#B5B1A3" opacity="0.38" />
          <ellipse cx="1150" cy="704" rx="130" ry="36" fill="#B5B1A3" opacity="0.38" />
          <ellipse cx="760" cy="790" rx="150" ry="38" fill="#B5B1A3" opacity="0.28" />

          {/* Vent stack */}
          <ellipse cx="560" cy="746" rx="30" ry="9" fill="#8A8A82" opacity="0.18" />
          <rect x="538" y="672" width="44" height="74" rx="6" fill="#BDB9AB" />
          <ellipse cx="560" cy="672" rx="22" ry="7" fill="#CFCBBD" />

          {/* Sagging clothes line between two posts */}
          <rect x="286" y="622" width="9" height="86" fill="#B0AC9E" />
          <rect x="900" y="622" width="9" height="86" fill="#B0AC9E" />
          <path d="M290 626 Q596 682 905 626" fill="none" stroke="#AEAA9C" strokeWidth="3" />

          {/* Abandoned cable spool and a stack of old tiles */}
          <ellipse cx="1180" cy="790" rx="58" ry="15" fill="#8A8A82" opacity="0.18" />
          <rect x="1126" y="746" width="108" height="44" rx="5" fill="#C6C2B3" stroke="#B0AC9E" strokeWidth="2" />
          <rect x="1290" y="762" width="96" height="12" rx="2" fill="#BFBBAD" />
          <rect x="1296" y="750" width="84" height="12" rx="2" fill="#C6C2B3" />
        </>
      )}
    </svg>
  );
}
