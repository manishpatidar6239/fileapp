import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const { width, height } = Dimensions.get("window");

/**
 * Scale a size based on the device width.
 * @param size - The size you want to scale.
 * @returns The scaled size.
 */
export const scaleWidth = (size: number): number => {
  return (size / 100) * SCREEN_WIDTH; // Percentage-based width
};

/**
 * Scale a size based on the device height.
 * @param size - The size you want to scale.
 * @returns The scaled size.
 */
export const scaleHeight = (size: number): number => {
  return (size / 100) * SCREEN_HEIGHT; // Percentage-based height
};

/**
 * Scale font size dynamically relative to screen dimensions.
 * @param size - The font size you want to scale.
 * @returns The scaled font size.
 */
export const scaleFont = (size: number): number => {
  // Use the geometric mean of width and height for font scaling
  const scaleFactor = Math.sqrt(SCREEN_WIDTH * SCREEN_HEIGHT) / 1000;
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

import { Platform } from "react-native";

const initialScale: number = Math.min(width, height) / 375;

const unit = {
  scale: (multi?: number): number =>
    multi ? initialScale * multi : initialScale,
  fontSize: (multi?: number): number =>
    multi ? initialScale * 16 * multi : initialScale * 16,
  windowHeight: (multi?: number): number => (multi ? height * multi : height),
  windowWidth: (multi?: number): number => (multi ? width * multi : width),
  screenHeader: (): number => initialScale * 48,
};

export const isIOS: boolean = Platform.OS === "ios";
export const isIphoneX: boolean = isIOS && (height >= 812 || width >= 812);

export default unit;

// Base Scale Multiplier: Used to maintain the proportional distance
// between sizes while ensuring 32 starts at 2.5.
const SCALE_FACTOR = 0.08;

export const fontSizes = {
  // --- Headings & Display Text ---
  // The calculation: (size * SCALE_FACTOR) is designed to give 2.5
  // at 32 and smoothly decrease. (32 * 0.08 = 2.56)
  32: unit.fontSize(32 * SCALE_FACTOR), // ~2.56 (Your starting point)
  30: unit.fontSize(30 * SCALE_FACTOR), // ~2.40
  28: unit.fontSize(28 * SCALE_FACTOR), // ~2.24
  26: unit.fontSize(26 * SCALE_FACTOR), // ~2.08
  24: unit.fontSize(24 * SCALE_FACTOR), // ~1.92
  22: unit.fontSize(22 * SCALE_FACTOR), // ~1.76
  20: unit.fontSize(20 * SCALE_FACTOR), // ~1.60
  18: unit.fontSize(18 * SCALE_FACTOR), // ~1.44

  // --- Body & UI Text (Mid-Range Factors) ---
  17: unit.fontSize(17 * SCALE_FACTOR), // ~1.28
  16: unit.fontSize(16 * SCALE_FACTOR), // ~1.28
  15: unit.fontSize(15 * SCALE_FACTOR), // ~1.20
  14: unit.fontSize(14 * SCALE_FACTOR), // ~1.12
  13: unit.fontSize(13 * SCALE_FACTOR), // ~1.04

  // --- Captions & Tiny Text ---
  12: unit.fontSize(12 * SCALE_FACTOR), // ~0.96 (Below 1.0 factor)
  11: unit.fontSize(11 * SCALE_FACTOR), // ~0.88
  10: unit.fontSize(10 * SCALE_FACTOR), // ~0.80 (Your smallest *usable* text size)

  // --- Micro Text (Use Sparingly) ---
  9: unit.fontSize(9 * SCALE_FACTOR), // ~0.72
  8: unit.fontSize(8 * SCALE_FACTOR), // ~0.64
  7: unit.fontSize(7 * SCALE_FACTOR), // ~0.56
  6: unit.fontSize(6 * SCALE_FACTOR), // ~0.48
  5: unit.fontSize(5 * SCALE_FACTOR), // ~0.40
  4: unit.fontSize(4 * SCALE_FACTOR), // ~0.32
  3: unit.fontSize(3 * SCALE_FACTOR), // ~0.24
  2: unit.fontSize(2 * SCALE_FACTOR), // ~0.16
  1: unit.fontSize(1 * SCALE_FACTOR), // ~0.08 (Tiny factor for testing/special use)
};