// Automatically picks up any images dropped into src/assets/projects/
// following the naming convention documented in that folder's README.txt
// (e.g. "vesper-cover.jpg", "vesper-1.jpg", "vesper-2.jpg", "vesper-3.jpg").
// If no matching file is found, callers should fall back to a placeholder.

const modules = import.meta.glob(
  "/src/assets/projects/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

// Build a lookup: "vesper-cover" -> "/assets/xxxxx.jpg"
const imageMap = {};
for (const path in modules) {
  const filename = path.split("/").pop();
  const nameWithoutExt = filename.replace(/\.[^.]+$/, "");
  imageMap[nameWithoutExt] = modules[path];
}

export function getCoverImage(slug) {
  return imageMap[`${slug}-cover`] || null;
}

export function getScreenshots(slug) {
  const shots = [];
  for (let i = 1; i <= 6; i++) {
    const img = imageMap[`${slug}-${i}`];
    if (img) shots.push(img);
  }
  return shots;
}
