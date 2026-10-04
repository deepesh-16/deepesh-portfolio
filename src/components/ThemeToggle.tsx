"use client";

import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  // mode is undefined until mounted; render an empty slot so layout does not shift.
  if (!mode) return <span className="inline-block size-10" aria-hidden />;
  const effective = mode === "system" ? systemMode : mode;
  const next = effective === "dark" ? "light" : "dark";
  return (
    <IconButton
      onClick={() => setMode(next)}
      aria-label={`Switch to ${next} mode`}
      className="!text-ink"
    >
      {effective === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
}
