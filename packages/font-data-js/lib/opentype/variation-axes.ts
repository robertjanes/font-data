export const designVariationAxes = {
  ital: {
    name: "Italic",
    min: 0,
    max: 1,
    default: 0,
  },
  opsz: {
    name: "Optical Size",
    min: 0,
    max: 0xffff,
    default: 0,
  },
  slnt: {
    name: "Slant",
    min: -90,
    max: 90,
    default: 0,
  },
  wdth: {
    name: "Width",
    min: 0,
    max: 0xffff,
    default: 0,
  },
  wght: {
    name: "Weight",
    min: 1,
    max: 1000,
    default: 0,
  },
} as const;

export const designVariationAxisTags = {
  ital: "Italic",
  opsz: "Optical Size",
  slnt: "Slant",
  wdth: "Width",
  wght: "Weight",
} as const;

export const designVariationAxisRanges = {
  ital: [0, 1],
  opsz: [0, 0xffff],
  slnt: [-90, 90],
  wdth: [0, 0xffff],
  wght: [1, 1000],
} as const;
