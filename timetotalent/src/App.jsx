import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuAppBar from "./assets/navbar.jsx";
import ComFinder from "./ComFinder/com_finder.jsx";
import "./App.css";
import ResumeFiller from "./ResumeBuilder/ResumeFiller";
import JobFinder from "./JobFinder/job_finder.jsx";
import AboutPage from "./about/aboutTT.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#544b3d", 
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 },
    body1: { fontFamily: "'Space Grotesk', sans-serif" },
    body2: { fontFamily: "'Space Grotesk', sans-serif" },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Router>
        <MenuAppBar />
        <Routes>
          <Route path="/com" element={<ComFinder />} />
          <Route path="/res" element={<ResumeFiller />} />
          <Route path="/job" element={<JobFinder />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
