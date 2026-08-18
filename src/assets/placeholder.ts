/**
 * Stock media resolver for Cineglare.
 *
 * Original photography / logos / showreels are not in the repo yet.
 * Every `asset()` / `logoAsset()` call resolves to a free stock image or video
 * (Unsplash + Google sample videos). Swap these URLs for real assets when media lands.
 */

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Unsplash source helper – stable, no API key required */
function unsplash(photoId: string, w = 1600, h = 1000): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

// Curated stock photo IDs by theme (cinema / events / marketing / corporate)
const STOCK = {
  cinema: [
    "photo-1489599849927-2ee91cede3ba",
    "photo-1478720568477-152d9b164e26",
    "photo-1440404653325-ab127d49abc1",
    "photo-1536440136628-849c177e76a1",
    "photo-1594909122845-11baa439b7bf",
  ],
  event: [
    "photo-1492684223066-81342ee5ff30",
    "photo-1514525253161-7a46d19cd819",
    "photo-1501281668745-f7f57925c3b4",
    "photo-1540575467063-178a50c2df87",
    "photo-1470229722913-7c0e2dbbafd3",
  ],
  marketing: [
    "photo-1460925895917-afdab827c52f",
    "photo-1557804506-669a67965ba0",
    "photo-1556761175-5971dc0efe70",
    "photo-1611224923853-80b023f02d71",
    "photo-1432888498266-38ffec3eaf0a",
  ],
  branding: [
    "photo-1561070791-2526d30994b5",
    "photo-1558655146-9f40138edfeb",
    "photo-1634942537034-2531766767d1",
    "photo-1626785774573-4b7993143468",
  ],
  celebrity: [
    "photo-1519677100203-a0e668c92439",
    "photo-1493225457124-a3eb161ffa5f",
    "photo-1516280440614-6697288d5d38",
  ],
  team: [
    "photo-1522071820081-009f0129c71c",
    "photo-1600880292203-757bb62b4baf",
    "photo-1552664730-d307ca884978",
    "photo-1573164713714-d95e436ab8d6",
  ],
  community: [
    "photo-1559027615-cd4628902d4a",
    "photo-1469571486292-0ba58a3f068b",
    "photo-1488521787991-ed7bbaae773c",
    "photo-1542601906990-b4d3fb778b09",
  ],
  abstract: [
    "photo-1618005182384-a83a8bd57fbe",
    "photo-1557683316-973673baf926",
    "photo-1579546929518-9e396f3cc809",
    "photo-1550684848-fac1c5b4e853",
  ],
  logo: [
    "photo-1611162617474-5b21e55e1137",
    "photo-1611162616305-c69b3fa7fbe0",
  ],
  contact: [
    "photo-1423666639041-f56000c27a9a",
    "photo-1596524430615-b46475ddff6e",
  ],
} as const;

type StockKey = keyof typeof STOCK;

function pick(theme: StockKey, path: string, w?: number, h?: number): string {
  const list = STOCK[theme];
  const id = list[hash(path) % list.length]!;
  return unsplash(id, w, h);
}

function themeFor(path: string): StockKey {
  const p = path.toLowerCase();
  if (p.includes("logo")) return "logo";
  if (p.includes("contact")) return "contact";
  if (p.includes("celebrity") || p.includes("spotlight") || p.includes("stage"))
    return "celebrity";
  if (
    p.includes("digital") ||
    p.includes("marketing") ||
    p.includes("insight-digital") ||
    p.includes("cta")
  )
    return "marketing";
  if (p.includes("brand") || p.includes("product") || p.includes("insight-branding"))
    return "branding";
  if (
    p.includes("event") ||
    p.includes("project") ||
    p.includes("concert") ||
    p.includes("portfolio")
  )
    return "event";
  if (p.includes("team") || p.includes("about") || p.includes("women") || p.includes("growth"))
    return "team";
  if (p.includes("community") || p.includes("csr") || p.includes("green"))
    return "community";
  if (
    p.includes("film") ||
    p.includes("cinema") ||
    p.includes("hero") ||
    p.includes("production") ||
    p.includes("promotion") ||
    p.includes("insight-films") ||
    p.includes("blog")
  )
    return "cinema";
  if (p.includes("differentiat") || p.includes("abstract")) return "abstract";
  return "cinema";
}

/** Free sample / stock video URLs (publicly accessible, CORS-friendly) */
const STOCK_VIDEOS = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
];

function isVideo(path: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(path);
}

/**
 * Returns a stock image or video URL for the given original asset path.
 */
export function asset(path: string, _label?: string): string {
  if (isVideo(path)) {
    return STOCK_VIDEOS[hash(path) % STOCK_VIDEOS.length]!;
  }

  if (/logo/i.test(path)) {
    return pick("logo", path, 400, 200);
  }

  if (/center/i.test(path)) {
    return pick(themeFor(path), path, 800, 1000);
  }

  if (/hero|about-image|cta|differentiat|poster/i.test(path)) {
    return pick(themeFor(path), path, 1920, 1080);
  }

  return pick(themeFor(path), path, 1400, 900);
}

/**
 * Partner / sponsor logo strip.
 */
export function logoAsset(path: string): string {
  const logoPhotos = [
    "photo-1611162617474-5b21e55e1137",
    "photo-1611162616305-c69b3fa7fbe0",
    "photo-1611162618071-b39a2ec055fb",
    "photo-1611162616475-46b635cb6868",
    "photo-1599305445671-ac291c95aaa9",
    "photo-1572044162444-ad6f8d9c1c6b",
    "photo-1560179707-f14baefdda1f",
    "photo-1553835973-dec43bfddbeb",
    "photo-1542744173-8e7e53415bb0",
    "photo-1556761175-b413da4baf72",
  ];
  const id = logoPhotos[hash(path) % logoPhotos.length]!;
  return unsplash(id, 320, 160);
}

/** Map portfolio clip filenames → stock videos */
export function portfolioVideo(filename: string): string {
  return STOCK_VIDEOS[hash(filename) % STOCK_VIDEOS.length]!;
}

export default asset;
