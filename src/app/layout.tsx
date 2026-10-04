import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-serif-4";
import "./globals.css";
import { theme } from "@/theme/theme";

export const metadata: Metadata = {
  title: "Srinivasa Deepesh Kommineni | Software Engineer",
  description:
    "Software Engineer II at JPMorganChase building agentic AI, fraud detection and cloud platforms with LangGraph, AWS, Kafka and React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline enableColorScheme />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
