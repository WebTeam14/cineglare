/**
 * Deterministic, dependency-free image placeholders.
 *
 * The original Cineglare assets (photography, logos, showreels) are not part of
 * this project yet, so every `@/assets/...` reference resolves to a generated
 * cinematic gradient SVG. Swap `asset()` for real imports when the media lands.
 */

const PALETTE: Array<[string, string, string]> = [
  ["#1a0508", "#3a0d14", "#d92b32"],
  ["#0b0b0d", "#241016", "#b3242b"],
  ["#120608", "#2c0f18", "#e04a3a"],
  ["#0d0d10", "#1c1c22", "#8f1f26"],
  ["#160709", "#40151c", "#ff5f52"],
];

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function prettyLabel(path: string): string {
  const base = path.split("/").pop() ?? path;
  return base
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Returns a data-URI SVG placeholder for the given original asset path.
 */
export function asset(path: string, label?: string): string {
  const h = hash(path);
  const [c1, c2, accent] = PALETTE[h % PALETTE.length]!;
  const text = label ?? prettyLabel(path);
  const angle = h % 60;
  const cx = 20 + (h % 60);
  const cy = 20 + ((h >> 3) % 60);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" gradientTransform="rotate(${angle})">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="r" cx="${cx}%" cy="${cy}%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <rect width="1200" height="800" fill="url(#r)"/>
  <g fill="none" stroke="${accent}" stroke-opacity="0.16">
    <circle cx="600" cy="400" r="180"/>
    <circle cx="600" cy="400" r="280"/>
    <circle cx="600" cy="400" r="380"/>
  </g>
  <text x="600" y="392" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="38" font-weight="700" fill="#ffffff" fill-opacity="0.9">${text.replace(/[<>&]/g, "")}</text>
  <text x="600" y="440" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" fill="#ffffff" fill-opacity="0.45">CINEGLARE</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** Square placeholder used for client / partner logo strips. */
export function logoAsset(path: string): string {
  const h = hash(path);
  const [, , accent] = PALETTE[h % PALETTE.length]!;
  const label = prettyLabel(path);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120">
  <rect width="240" height="120" rx="12" fill="#141416"/>
  <rect x="0.5" y="0.5" width="239" height="119" rx="12" fill="none" stroke="${accent}" stroke-opacity="0.25"/>
  <text x="120" y="66" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" fill="#ffffff" fill-opacity="0.72">${label}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default asset;
