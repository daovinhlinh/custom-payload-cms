export const htmlFontSize = 16;

export const baseLinePx = 20;

export const base = (multiplier = 1): string => `${(baseLinePx / htmlFontSize) * multiplier}rem`