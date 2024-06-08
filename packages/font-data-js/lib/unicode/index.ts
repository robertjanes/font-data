export * from "./unicode-blocks.js";

export const unicodeNotdefCode = 65535 as const;

export const unicodeControlCodeRanges = [
  [0, 31], // C0 controls
  [127, 159], // C0 controls + C1 controls
] as const;

export const unicodeWhitespaceCodes = [
  32, // space
  160, // nbspace
  8192, // En Quad
  8193, // Em Quad
  8194, // En Space
  8195, // Em Space
  8196, // Three-Per-Em Space
  8197, // Four-Per-Em Space
  8198, // Six-Per-Em Space
  8199, // Figure Space
  8200, // Punctuation Space
  8201, // Thin Space
  8202, // Hair Space
] as const;
