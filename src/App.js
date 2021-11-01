import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState(
    "# This is a Markdown Editor. Type something here."
  );

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
