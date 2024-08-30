"use client";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "@/components/common/TopBar";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// Create a default theme
const theme = createTheme({
  // You can customize your theme here
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {/* CssBaseline helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <TopBar />
          {children}
          <ProgressBar
          height="4px"
          color="#f58220"
          options={{ showSpinner: false }}
          shallowRouting
        />
        </ThemeProvider>
      </body>
    </html>
  );
}
