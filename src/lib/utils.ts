import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const PORTFOLIO_SCROLL_KEY = "portfolio:scrollY";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const parseColor = (color: string): [number, number, number] | null => {
  const hex = color.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const value = parseInt(hex[1], 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  }

  const hsl = color.trim().match(/^hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/i);
  if (!hsl) {
    return null;
  }

  const h = Number(hsl[1]);
  const s = Number(hsl[2]) / 100;
  const l = Number(hsl[3]) / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [f(0) * 255, f(8) * 255, f(4) * 255];
};

export function getRelativeLuminance(color: string): number | null {
  const rgb = parseColor(color);
  if (!rgb) {
    return null;
  }

  const [r, g, b] = rgb.map((channel) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getReadableTextColor(background: string): "#000000" | "#FFFFFF" {
  const luminance = getRelativeLuminance(background);
  if (luminance === null) {
    return "#FFFFFF";
  }

  const contrastWithWhite = 1.05 / (luminance + 0.05);
  const contrastWithBlack = (luminance + 0.05) / 0.05;
  return contrastWithBlack > contrastWithWhite ? "#000000" : "#FFFFFF";
}
