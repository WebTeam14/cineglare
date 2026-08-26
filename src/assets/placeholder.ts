/**
 * Asset path helpers.
 * Put image/media files under `public/assets/` (and videos under `public/videos/`)
 * so these URLs resolve at runtime.
 */

/** Image / general media by filename → `/assets/<filename>` */
export function asset(filename: string): string {
  return `/assets/${filename}`;
}

/** Logo by filename → `/assets/logo/<filename>` */
export function logoAsset(filename: string): string {
  return `/assets/logo/${filename}`;
}

/** Portfolio video by filename → `/videos/<filename>` */
export function portfolioVideo(filename: string): string {
  return `/videos/${filename}`;
}