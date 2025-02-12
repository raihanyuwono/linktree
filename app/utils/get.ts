export type FileType = "jpg" | "jpeg" | "webp" | "svg";

export function getAsset(
  dataType: string,
  filename: string,
  filetype: FileType
) {
  return `/assets/${dataType}s/${filename}.${filetype}`;
}
