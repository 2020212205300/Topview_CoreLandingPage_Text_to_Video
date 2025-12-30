import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Error logging for blank page debugging
window.onerror = function(message, source, lineno, colno, error) {
  const errorDiv = document.createElement("div");
  errorDiv.style.position = "fixed";
  errorDiv.style.top = "0";
  errorDiv.style.left = "0";
  errorDiv.style.width = "100%";
  errorDiv.style.backgroundColor = "#fee2e2";
  errorDiv.style.color = "#991b1b";
  errorDiv.style.padding = "1rem";
  errorDiv.style.zIndex = "9999";
  errorDiv.style.borderBottom = "1px solid #ef4444";
  errorDiv.innerHTML = `
    <strong>Error detected:</strong><br>
    ${message}<br>
    <small>${source}:${lineno}:${colno}</small>
    <pre style="margin-top: 0.5rem; white-space: pre-wrap;">${error?.stack || ''}</pre>
  `;
  document.body.appendChild(errorDiv);
};

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element with id 'root' not found");
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Mount error:", error);
}
