"use client";

import { createTheme } from "@mui/material/styles";

// Single source of truth for colors. Tailwind reads these through the
// --mui-palette-* variables mapped in globals.css.
export const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#0b7468" },
        error: { main: "#b83a2b" },
        background: { default: "#f6f8f8", paper: "#ffffff" },
        text: { primary: "#13243a", secondary: "#51606f" },
        divider: "#dbe3e6",
      },
    },
    dark: {
      palette: {
        primary: { main: "#4fc3b0" },
        error: { main: "#ef7b6a" },
        background: { default: "#0f1a28", paper: "#162335" },
        text: { primary: "#e6edf2", secondary: "#a3b3c3" },
        divider: "#2b3b50",
      },
    },
  },
  typography: {
    fontFamily: '"Source Serif 4 Variable", Georgia, "Times New Roman", serif',
    fontSize: 18,
    h1: { fontFamily: '"Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif', fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.04 },
    h2: { fontFamily: '"Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif', fontWeight: 800, letterSpacing: "-0.015em" },
    h3: { fontFamily: '"Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif', fontWeight: 600, letterSpacing: "-0.015em" },
    h4: { fontFamily: '"Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif', fontWeight: 600, letterSpacing: "-0.015em" },
    button: { fontFamily: '"Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif', fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 8 },
});
