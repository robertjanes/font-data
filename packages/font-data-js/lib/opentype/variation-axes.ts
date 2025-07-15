// https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg
export const designVariationAxes = {
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_ital */
  ital: {
    name: "Italic",
    min: 0,
    max: 1,
    default: 0,
  },
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_opsz */
  opsz: {
    name: "Optical Size",
    min: 0,
    max: 0xffff,
    default: 0,
  },
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_slnt */
  slnt: {
    name: "Slant",
    min: -90,
    max: 90,
    default: 0,
  },
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wdth */
  wdth: {
    name: "Width",
    min: 0,
    max: 0xffff,
    default: 0,
  },
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wght */
  wght: {
    name: "Weight",
    min: 1,
    max: 1000,
    default: 0,
  },
} as const;

export const designVariationAxisTags = {
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_ital */
  ital: "Italic",
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_opsz */
  opsz: "Optical Size",
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_slnt */
  slnt: "Slant",
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wdth */
  wdth: "Width",
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wght */
  wght: "Weight",
} as const;

export const designVariationAxisRanges = {
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_ital */
  ital: [0, 1],
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_opsz */
  opsz: [0, 0xffff],
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_slnt */
  slnt: [-90, 90],
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wdth */
  wdth: [0, 0xffff],
  /** https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxistag_wght */
  wght: [1, 1000],
} as const;
