import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The App Store listing links to #privacy.
if (window.location.hash === "#privacy") window.location.replace("#/privacy");

createRoot(document.getElementById("root")!).render(<App />);
